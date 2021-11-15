import * as ModuleObject from "./module-object.mjs"

console.info(ModuleObject.firstName)
console.info(ModuleObject.middleName)
console.info(ModuleObject.lastName)

ModuleObject.hello(`Pecundang`)

const person = new ModuleObject.Person(`Usep Class`)
console.info(person)