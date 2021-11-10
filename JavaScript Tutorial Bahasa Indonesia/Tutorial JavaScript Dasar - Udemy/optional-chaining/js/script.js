const person = {
    address : {
        country : `Jakarta`
    }
}

const person1 = {
    address : `Jakarta`
}

const person2 = {}

const country = person?.address?.country
console.info(country)
const country1 = person1?.address?.country
console.info(country1)
const country2 = person2?.address?.country
console.info(country2)



