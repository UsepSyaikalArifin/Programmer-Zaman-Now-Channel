function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    this.sayHello = (nama) => document.writeln(`<p>Hi ${nama} My Name is ${this.firstName}</p>`)
}

const usep = new Person(`Usep Syaikal`, `Arifin`)
const asep = new Person(`Asep Faisal`, `Arifin`)

Person.prototype.sayBye = () => console.info(`Good Bye`)
Person.prototype.run = function(){
    console.info(`${this.firstName} is Run`)
}

console.log(usep)
console.log(asep)

usep.sayBye()
asep.run()