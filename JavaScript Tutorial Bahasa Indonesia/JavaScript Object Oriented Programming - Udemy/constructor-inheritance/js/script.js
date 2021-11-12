// 1. Class ke - 1
function Employee(firstName){
    this.firstName = firstName,
    this.sayHello = (nama) => document.writeln(`<p>Hi ${nama} My Name is ${this.firstName}</p>`)
}

// 2. Class ke - 2
function Manager(firstName, lastName){
    Employee.call(this, firstName)
    this.lastName = lastName
}

const usep = new Manager(`Usep Syaikal`, `Arifin`)
usep.sayHello(`Asep Faisal`)
document.writeln(`<p>${usep.firstName}</p>`)