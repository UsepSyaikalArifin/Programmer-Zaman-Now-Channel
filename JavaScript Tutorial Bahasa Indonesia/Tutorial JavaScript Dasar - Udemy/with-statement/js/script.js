const person = {
    firstName : `Usep`,
    middleName : `Syaikal`,
    lastName : `Arifin`
}  

for(const properti in person){
    document.writeln(`<p>Properti ${properti} = ${person[properti]}</p>`)
}

const firstName = `Eko`
const lastName = `Nugraha`

with(person){
        document.writeln(`<p>${firstName}</p>`)
        document.writeln(`<p>${middleName}</p>`)
        document.writeln(`<p>${lastName}</p>`)
}

