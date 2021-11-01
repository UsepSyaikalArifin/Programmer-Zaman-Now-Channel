// 1. Operator OR (||)
console.info(`Hello` || ``)
console.info(`` || [])
console.info(`0` || `Nol`)
console.info(0 || `Nol`)
console.info(null || `Null`)
console.info(undefined || `UNDEFINED`)
console.info(0 || false)

const person = {
    firstName : `Usep Syaikal`,
    lastName : `Arifin`
}

const name = person.firstName || person.lastName

console.info(name)

// 2. Operator AND (&&)
console.info(`Hello` && ``)
console.info(`` && [])
console.info(`0` && `NOL`)
console.info(0 && `NOL`)
console.info(null && `Null`)
console.info(undefined && `UNDEFINED`)
console.info(`undefined` && `null`)