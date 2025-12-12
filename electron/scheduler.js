const EventEmitter = require('events');

class AudioScheduler extends EventEmitter {
  constructor() {
    super();
    this.schedules = new Map();
    this.nextId = 1;
    this.isRunning = false;
  }

  schedule(time, config) {
    const id = this.nextId++;
    const schedule = {
      id,
      time: new Date(time),
      config,
      triggered: false
    };

    this.schedules.set(id, schedule);
    console.log(`[Scheduler] Scheduled ${id}: ${schedule.time.toISOString()}`);
    return id;
  }

  cancel(id) {
    if (this.schedules.has(id)) {
      this.schedules.delete(id);
      console.log(`[Scheduler] Cancelled ${id}`);
      return true;
    }
    return false;
  }

  getUpcoming(limit = 5) {
    const now = new Date();
    const upcoming = Array.from(this.schedules.values())
      .filter(s => s.time > now && !s.triggered)
      .sort((a, b) => a.time - b.time)
      .slice(0, limit);

    return upcoming;
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.checkSchedules();
    console.log('[Scheduler] Started');
  }

  stop() {
    this.isRunning = false;
    console.log('[Scheduler] Stopped');
  }

  checkSchedules() {
    if (!this.isRunning) return;

    const now = new Date();
    const toTrigger = Array.from(this.schedules.values())
      .filter(s => s.time <= now && !s.triggered);

    toTrigger.forEach(schedule => {
      schedule.triggered = true;
      this.emit('trigger', schedule);
    });

    // Check again in 10 seconds
    setTimeout(() => this.checkSchedules(), 10000);
  }

  getAllSchedules() {
    return Array.from(this.schedules.values());
  }

  clearAll() {
    this.schedules.clear();
    console.log('[Scheduler] Cleared all schedules');
  }

  getStats() {
    const all = Array.from(this.schedules.values());
    const triggered = all.filter(s => s.triggered).length;
    const pending = all.filter(s => !s.triggered).length;

    return {
      total: all.length,
      triggered,
      pending,
      isRunning: this.isRunning
    };
  }
}

module.exports = AudioScheduler;
