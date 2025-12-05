// Web Worker for reliable background timing
// This worker runs even when the main thread is throttled

let bellSchedules = [];

let lastCheckedMinute = '';

// Check schedules every 10 seconds
setInterval(() => {
    checkSchedules();
}, 10000);

function checkSchedules() {
    const now = new Date();
    const currentTime =
        now.getHours().toString().padStart(2, '0') + ':' +
        now.getMinutes().toString().padStart(2, '0');
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });

    // Only check once per minute
    if (currentTime === lastCheckedMinute) return;
    lastCheckedMinute = currentTime;

    // Check each schedule
    for (const schedule of bellSchedules) {
        const shouldTrigger =
            currentTime === schedule.time &&
            (schedule.day === 'Daily' || schedule.day === currentDay) &&
            !schedule.triggered;

        if (shouldTrigger) {
            // Mark as triggered for this minute
            schedule.triggered = true;

            // Notify main thread
            self.postMessage({
                type: 'BELL_TRIGGER',
                payload: {
                    id: schedule.id,
                    name: schedule.name,
                    time: schedule.time,
                    day: schedule.day
                }
            });

            // Reset triggered flag after 2 minutes
            setTimeout(() => {
                schedule.triggered = false;
            }, 120000);
        }
    }
}

// Listen for messages from main thread
self.onmessage = (event) => {
    const { type, payload } = event.data;

    switch (type) {
        case 'UPDATE_SCHEDULES':
            bellSchedules = payload.map((schedule) => ({
                ...schedule,
                triggered: false
            }));
            console.log('[BellWorker] Updated schedules:', bellSchedules.length);
            break;

        case 'CHECK_NOW':
            checkSchedules();
            break;

        case 'PING':
            self.postMessage({ type: 'PONG' });
            break;
    }
};

console.log('[BellWorker] Background bell worker initialized');
