// 1. Bentuk ke - 1
class Employee{
    constructor(name){
        this.name = name
    }
    sayHello(name){
        document.writeln(`<p>Hello ${name} My name is Employee ${this.name}`)
    }
}

class Manager extends Employee{
    sayHello(name){
        document.writeln(`<p>Hello ${name} My name is Manager ${this.name}`)
    }
}

const usep = new Employee(`Usep Syaikal`)
const asep = new Manager(`Asep Faisal`)

usep.sayHello(`Joko Widodo`)
asep.sayHello(`Ma'ruf Amin`)

// 2. Bentuk ke - 2
class Employee2{
    constructor(firstName){
        this.name = firstName
    }
    sayHello(name){
        document.writeln(`<p>Hello ${name} My name is Employee2 ${this.name}`)
    }
}

class Manager2 extends Employee2{
    constructor(firstName, lastName){
        super(firstName)
        this.lastName = lastName
    }
    sayHello(name){
        document.writeln(`<p>Hello ${name} My name is Manager2 ${this.firstName} ${this/this.lastName}</p>`)
    }
}

const usep2 = new Employee2(`Prof Dr.Eng Usep Syaikal M.Sc M.Eng Ph.D`)
const asep2 = new Employee2(`Prof Dr.Eng Asep Syaikal M.Sc M.Eng Ph.D`)

usep2.sayHello(`Jack`)
asep2.sayHello(`Jacob`)