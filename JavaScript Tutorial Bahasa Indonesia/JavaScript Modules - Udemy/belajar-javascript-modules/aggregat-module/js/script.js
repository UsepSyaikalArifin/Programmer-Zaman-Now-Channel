import {Person, sayHello, sayGoodBye, company, sum, Company} from "./aggregat.mjs"

const person = new Person(`Usep`)
person.sayHello(`Jagoan`)

sayHello(`Pecundang`)
sayGoodBye(`Pecundang`)

console.info(company)
console.info(sum(1, 1))
const nameCompany = new Company()
console.info(nameCompany)