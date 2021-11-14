// 1.
const person = {
    firstName : `Usep`,
    middleName : `Syaikal`,
    lastName : `Arifin`,
    addres :{
        country : `Indonesia`,
        city : `Subang`
    },
    hobbies : [
        `Coding`,`Game`,`Travelling`
    ]
}

const json = JSON.stringify(person)
const jsonAgain = JSON.parse(json)

console.info(json)
console.info(jsonAgain)