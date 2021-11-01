// 1. Tanpa With Statement
const person = {
    firstName : `Usep`,
    middleName : `Syaikal`,
    lastName : `Arifin`
}

document.writeln(`<p>${person.firstName}</p>`)
document.writeln(`<p>${person.middleName}</p>`)
document.writeln(`<p>${person.lastName}</p>`)

// 2. With Statement
with (person){
    document.writeln(`<p>${firstName}</p>`)
    document.writeln(`<p>${middleName}</p>`)
    document.writeln(`<p>${lastName}</p>`)
}

// 3. Ambiguitas penggunaan With Statement
const firstName = `Zack Janujaz`
const lastName = `Jacksonville`

with (person){
    document.writeln(`<p>${firstName}</p>`)
    document.writeln(`<p>${middleName}</p>`)
    document.writeln(`<p>${lastName}</p>`)
}
