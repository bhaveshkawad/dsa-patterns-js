// =======================
// Task Scheduler
// =======================

class TaskScheduler {
  constructor (maxConcurrency) {
    this.maxConcurrency = maxConcurrency
    this.queue = []
    this.runningCount = 0
  }

  addTask (task) {
    this.queue.push(task)
    this.runNext()
  }

  runNext () {
    // Stop if no capacity or no tasks
    if (
      this.runningCount >= this.maxConcurrency ||
      this.queue.length === 0
    ) {
      return
    }

    const task = this.queue.shift()
    this.runningCount++

    task()
      .catch(err => {
        console.error('❌ Task failed:', err)
      })
      .finally(() => {
        this.runningCount--
        this.runNext() // start next waiting task
      })

    // Fill remaining free slots
    this.runNext()
  }
}

// =======================
// Example Tasks
// =======================

function createTask (id, duration) {
  return () =>
    new Promise(resolve => {
      console.log(`▶️ Task ${id} started`)
      setTimeout(() => {
        console.log(`✅ Task ${id} finished`)
        resolve()
      }, duration)
    })
}

// =======================
// Using the Scheduler
// =======================

const scheduler = new TaskScheduler(2) // only 2 tasks at a time

scheduler.addTask(createTask(1, 3000))
scheduler.addTask(createTask(2, 2000))
scheduler.addTask(createTask(3, 1000))
scheduler.addTask(createTask(4, 1500))
scheduler.addTask(createTask(5, 500))
