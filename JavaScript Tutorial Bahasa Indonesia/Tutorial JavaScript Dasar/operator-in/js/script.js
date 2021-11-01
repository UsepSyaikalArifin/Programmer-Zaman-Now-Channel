// 1
const person = {
    firstName : "Usep Syaikal",
    lastName : "Arifin"
}

const result = "firstName" in person
console.info(result)

// 2
if ("firstName" in person){
    document.writeln(`<p>Hello ${person.firstName}</p>`)
}else{
    document.writeln(`<p>Hello Saya</p>`)
}

// 3
const student = {
    firstName : "Usep",
    middleName : undefined,
    lastName : "Arifin"
}

if ("middleName" in student){
    document.writeln(`<p>Hello ${student.middleName}</p>`)
}else{
    document.writeln(`<p>Hello Studente</p>`)
}

// 4
const names = [null, "Usep", null]
const result2 = 0 in names
document.writeln(`<p>${result2}</p>`)