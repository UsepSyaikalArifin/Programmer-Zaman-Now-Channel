// 1. Bentuk 1
const person = {
    firstName : `Usep`,
    middleName : undefined,
    lastName : `Syaikal`
}

const cekProperty = `firstName` in person
const cekPropertyund = `lastName` in person
console.info(cekProperty)
console.info(cekPropertyund)

if(cekProperty === true){
    console.info(`Hello ${person.firstName}`)
}else{
    console.info(`Hello`)
}

// 2.
const names = [null, `Usep`, null]
const cekIndex = 0 in names
console.info(cekIndex)