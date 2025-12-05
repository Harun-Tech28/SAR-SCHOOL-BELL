// Background Bell Manager
// Uses Web Worker for reliable background timing with fallback

import { Timetable } from './store';

let bellWorker: Worker | null = null;
let onBellTrigger: ((schedule: any) => void) | null = null;
let fallbackInterval: ReturnType<typeof setInterval> | null = null;
let fallbackSchedules: Array<{ id: string; time: string; day: string; name: string; triggered: boolean }> = [];
let lastCheckedMinute = '';

/**
 * Fallback check function when worker is not available
 */
function fallbackCheckSchedules() {
    if (!onBellTrigger) return;

    const now = new Date();
    const currentTime =
        now.getHours().toString().padStart(2, '0') + ':' +
        now.getMinutes().toString().padStart(2, '0');
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });

    // Only check once per minute
    if (currentTime === lastCheckedMinute) return;
    lastCheckedMinute = currentTime;

    // Check each schedule
    for (const schedule of fallbackSchedules) {
        const shouldTrigger =
            currentTime === schedule.time &&
            (schedule.day === 'Daily' || schedule.day === currentDay) &&
            !schedule.triggered;

        if (shouldTrigger) {
            schedule.triggered = true;
            console.log('[BellManager Fallback] Bell triggered:', schedule.name);
            onBellTrigger({
                id: schedule.id,
                name: schedule.name,
                time: schedule.time,
                day: schedule.day
            });

            // Reset triggered flag after 2 minutes
            setTimeout(() => {
                schedule.triggered = false;
            }, 120000);
        }
    }
}

/**
 * Initialize the background bell worker
 */
export function initBellWorker(callback: (schedule: any) => void): void {
    if (typeof window === 'undefined') return;

    // Clean up existing worker
    if (bellWorker) {
        bellWorker.terminate();
    }
    if (fallbackInterval) {
        clearInterval(fallbackInterval);
        fallbackInterval = null;
    }

    onBellTrigger = callback;

    try {
        bellWorker = new Worker('/bell-worker.js');

        bellWorker.onmessage = (event) => {
            const { type, payload } = event.data;

            if (type === 'BELL_TRIGGER' && onBellTrigger) {
                console.log('[BellManager] Bell triggered from worker:', payload);
                onBellTrigger(payload);
            } else if (type === 'PONG') {
                console.log('[BellManager] Worker is alive');
            }
        };

        bellWorker.onerror = (error) => {
            console.warn('[BellManager] Worker error, switching to fallback mode:', error.message || error);
            // Switch to fallback mode
            bellWorker?.terminate();
            bellWorker = null;
            startFallbackMode();
        };

        console.log('[BellManager] Bell worker initialized');
    } catch (error) {
        console.warn('[BellManager] Failed to initialize worker, using fallback:', error);
        startFallbackMode();
    }
}

/**
 * Start fallback mode using setInterval
 */
function startFallbackMode(): void {
    if (fallbackInterval) return;

    console.log('[BellManager] Starting fallback mode (setInterval)');
    fallbackInterval = setInterval(fallbackCheckSchedules, 10000);
}

/**
 * Update the schedules in the worker or fallback
 */
export function updateWorkerSchedules(timetables: Timetable[]): void {
    const schedules = timetables.map(tt => ({
        id: tt.id,
        time: tt.bellTime,
        day: tt.day,
        name: tt.name,
        triggered: false
    }));

    if (bellWorker) {
        bellWorker.postMessage({
            type: 'UPDATE_SCHEDULES',
            payload: schedules
        });
        console.log('[BellManager] Updated worker with', schedules.length, 'schedules');
    } else {
        // Update fallback schedules
        fallbackSchedules = schedules;
        console.log('[BellManager Fallback] Updated with', schedules.length, 'schedules');
    }
}

/**
 * Force check schedules now (useful when returning from background)
 */
export function checkSchedulesNow(): void {
    if (bellWorker) {
        bellWorker.postMessage({ type: 'CHECK_NOW' });
    } else {
        fallbackCheckSchedules();
    }
}

/**
 * Terminate the worker
 */
export function terminateBellWorker(): void {
    if (bellWorker) {
        bellWorker.terminate();
        bellWorker = null;
        console.log('[BellManager] Bell worker terminated');
    }
    if (fallbackInterval) {
        clearInterval(fallbackInterval);
        fallbackInterval = null;
        console.log('[BellManager] Fallback mode stopped');
    }
    onBellTrigger = null;
}

/**
 * Check if worker is running
 */
export function isWorkerRunning(): boolean {
    return bellWorker !== null || fallbackInterval !== null;
}
