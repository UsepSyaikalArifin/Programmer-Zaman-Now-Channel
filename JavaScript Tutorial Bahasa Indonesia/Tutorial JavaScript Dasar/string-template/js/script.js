const name = "Usep Syaikal Arifin"
const firstName = "Usep"
const middleName = "Syaikal"
const lastName = "Arifin"

let multilinestring = `
Nama saya adalah Usep Syaikal Arifin
Hello World
Hahahah
Test ah
`

const value = 80

const template = `Name : ${name} ${firstName} ${middleName} ${lastName}`

const template2 = `Name : ${name} , Lulus : ${value > 75}`

console.info(template)
console.info(template2)

document.writeln("<pre>")
document.writeln(multilinestring)
document.writeln("</pre>")