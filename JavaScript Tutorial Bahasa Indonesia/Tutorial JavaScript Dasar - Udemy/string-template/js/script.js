// 1. Bentuk Dasar
const name = `Usep Syaikal Arifin`
const template = `Name : ${name}`
const firstName = `Usep`
const middleName = `Syaikal`
const lastName = `Arifin`
const fullName = `${firstName} ${middleName} ${lastName}`

console.info(template)
console.info(fullName)

// 2. Exspression di String Template
const nilai = 90
const template2 = `Name : ${name}, Lulus => ${nilai > 70}`
console.info(template2)

// 3. Mulitiline String
let multiLineString = `Usep Syaikal Arifin
adala seorang Prof di bidang Computer Science dan Electrical
Engineering`

document.writeln(`<p>${multiLineString}</p>`)