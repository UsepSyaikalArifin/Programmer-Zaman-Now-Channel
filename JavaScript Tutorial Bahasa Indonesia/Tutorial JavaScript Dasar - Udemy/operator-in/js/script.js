// 1. Bentuk 1
const person = {
    firstName : `Usep`,
    middleName : undefined,
    lastName : `Syaikal`
}

const student = {
    firstName : `Usep`,
    middleName : undefined,
    lastName : `Syaikal`
}

const cekProperty = `firstName` in person
const cekPropertyund = `lastName` in person
const cekPropertyStudent = `middleName` in student
console.info(cekProperty)
console.info(cekPropertyund)

if(cekProperty === true){
    console.info(`Hello ${person.firstName}`)
}else{
    console.info(`Hello`)
}

if(cekPropertyStudent === true){
    console.info(`Hello ${student.middleName}`)
}else{
    console.info(`NO`)
}

// 2.
const names = [null, `Usep`, null]
const cekIndex = 0 in names
console.info(cekIndex)