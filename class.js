// alert('Hello fom clas.js')

class Task {

    constructor(title = Task.getDefaultTitle()) {
        this.title = title
        this._done = false
        Task.count += 1
        console.log(this.title)
    }

    get done() {
        return this._done === true ? 'Is executed': 'Isnt executed'
    }

    set done(value) {
        if (value !== undefined && typeof value === 'boolean') {
            this._done = value
        } else {
            console.error('Error! Specify only true or false')
        }
    }

    complete() {
        this.done = true
        console.log(`Task: ${this.title} is executed`)
    }

    static getDefaultTitle() {
        return 'Tasks'
    }
}

Task.count = 0

let task = new Task('Task creating!!!')
let task1 = new Task()


console.log(typeof task)
console.log(task instanceof Task)
console.log(Task.count)

console.log(task.done, task._done)
task.complete()
console.log(task.done, task._done)




console.log('#######################################')

class Task5 {
    constructor(title) {
        this.title = title
        this.done = false
        console.log('Task creating')
    }
    complete() {
        this.done = true
        console.log(`Task ${this.title} is executed`)
    }
}

class SubTask extends Task5 {
    constructor(title, parent) {
        super(title)
        this.parent = parent
        console.log('Subtask creating')
    }

    complete() {
        super.complete()
        console.log(`Subtask ${this.title} is executed`)
    }
}

let task5 = new Task5('To learn JS') 
let subtask = new SubTask('To learn ES6', task5)

task5.complete()
subtask.complete()

console.log(task5)
console.log(subtask)
console.log(subtask instanceof SubTask)
console.log(subtask instanceof Task5)



console.log('#######################################')