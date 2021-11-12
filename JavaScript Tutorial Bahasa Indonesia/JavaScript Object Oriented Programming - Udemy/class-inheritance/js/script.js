// 1.
class Employee{
    sayHello(name){
        console.info(`Hi ${name}, My name is Employee ${this.name}`)
    }
}

class Manager extends Employee{
    sayHello(name){
        console.info(`Hi ${name}, My name is Manager ${this.name}`)
    }
}

const usep = new Employee()
usep.name = `Usep Syaikal Arifin`
usep.sayHello(`Joko`)

const asep = new Manager()
asep.name = `Asep Faisal Arifin`
asep.sayHello(`Joko`)

console.info(usep)
console.info(asep)