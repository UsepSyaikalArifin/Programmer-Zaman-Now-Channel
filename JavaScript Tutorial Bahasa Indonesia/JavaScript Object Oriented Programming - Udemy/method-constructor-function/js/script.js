function Person(){
    this.firstName = ``,
    this.lastName = ``,
    this.sayHello = (nama) => document.writeln(`<p>Hello ${nama} my Name is ${this.firstName}</p>`)
}

const usep = new Person()
usep.firstName = `Usep Syaikal`
usep.lastName = `Arifin`
usep.sayHello(`Asep`)

const asep = new Person()
asep.firstName = `Asep Faisal`
asep.lastName = `Arifin`
asep.sayHello(`Usep`)