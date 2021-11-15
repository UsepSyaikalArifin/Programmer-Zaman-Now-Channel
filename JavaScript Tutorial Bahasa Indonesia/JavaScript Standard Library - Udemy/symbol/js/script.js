// 1. Symbol
{
const firstName = Symbol(`firstName`)
const lastName = Symbol(`lastName`)

const person = {}
person[firstName] = `Usep Syaikal`
person[lastName] = `Arifin`

console.info(person)
console.info(person[firstName])
console.info(person[lastName])
}
// 2. Symbol for
{
const person = {}
person[Symbol.for(`firstName`)] =`Usep Syaikal`
person[Symbol.for(`lastName`)] =`Arifin`

console.info(person)
console.info(person[Symbol.for(`firstName`)])
console.info(person[Symbol.for(`lastName`)])
}