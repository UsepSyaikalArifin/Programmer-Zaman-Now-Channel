console.info(`Hello` || ``)
console.info(`` || `Hello`)
console.info(undefined || null)
console.info(0 || NaN)
console.info(null || undefined)
console.info(NaN || 0)

console.info(`Hello` && ``)
console.info(`` && `Hello`)
console.info(undefined && null)
console.info(0 && NaN)
console.info(null && undefined)
console.info(NaN && 0)

const person = {
    firstName : `Usep`,
    middleName :  `Syaikal`,
    lastName :  `Arifin`
}

const name = person.firstName || person.lastName