function Person(firstName, lastName){
    this.firstName = firstName,
    this.lastName = lastName,
    this.sayHello = (nama) => document.writeln(`<p>Hello ${nama} My Name is ${this.firstName}</p>`)
}

const usep = new Person(`Usep Syaikal`, `Arifin`)
usep.sayHello(`Asep Faisal`)

const asep = new Person(`Asep Faisal`, `Arifin`)
asep.sayHello(`Usep Syaikal`)