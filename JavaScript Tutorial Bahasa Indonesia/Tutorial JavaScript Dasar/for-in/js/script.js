// 1. For In => Object
const person = {
    firstName : `Usep`,
    middleName : `Syaikal`,
    lastName : `Arifin`
}

for (const property in person){
    document.writeln(`<p>Property ${property} : ${person[property]}</p>`)
}

// 2. For In => Array (Tidak di anjurkan)
const names = [`Usep`, `Syaikal`, `Arifin`]

for (const index in names){
    document.writeln(`<p> Index  ${index} : ${names[index]}</p>`)
}