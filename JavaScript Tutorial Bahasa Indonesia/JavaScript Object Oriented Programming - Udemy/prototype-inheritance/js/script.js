// 1.Prototype Inheritance yang salah
/*---
function Employee(name){
    this.name = name
}
function Manager(name){
    this.name = name
}

Manager.prototype = Employee.prototype

Manager.prototype.sayHello = function(name){
    console.info(`Hello ${name} My name is Manager ${this.name}`)
}
Employee.prototype.sayHello = function(name){
    console.info(`Hello ${name} My name is Employee ${this.name}`)
}

const employee = new Employee(`Budi`)
employee.sayHello(`Eko`)
const manager = new Manager(`Usep`)
manager.sayHello(`Eko`) 
---*/

// 2.Prototype Inheritance yang Benar
function Employee(name){
    this.name = name
}
function Manager(name){
    this.name = name
}

Manager.prototype = Object.create(Employee.prototype)

Manager.prototype.sayHello = function(name){
    console.info(`Hello ${name} My name is Manager ${this.name}`)
}
Employee.prototype.sayHello = function(name){
    console.info(`Hello ${name} My name is Employee ${this.name}`)
}

const employee = new Employee(`Budi`)
employee.sayHello(`Eko`)
const manager = new Manager(`Usep`)
manager.sayHello(`Eko`)

console.info(employee)
console.info(manager)