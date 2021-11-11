const person = {
    firstName : `Usep`,
    middleName : `Syaikal`,
    lastName : `Arifin`
}  

for(const properti in person){
    document.writeln(`<p>Properti ${properti} = ${person[properti]}</p>`)
}

with(person){
        document.writeln(`<p>${firstName}</p>`)
        document.writeln(`<p>${middleName}</p>`)
        document.writeln(`<p>${lastName}</p>`)
}

