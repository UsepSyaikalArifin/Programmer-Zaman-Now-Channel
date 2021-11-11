const person = {
    firstName : `Usep`,
    middleName : `Syaikal`,
    lastName : `Arifin`
}

for(const property in person){
    document.writeln(`<p>Property ${property} : ${person[property]}</p>`)
}

const name = [`Usep`, `Syaikal`, `Arifin`]

for(const index in name){
    document.writeln(`<p>${index}-${name[index]}</p>`)
}