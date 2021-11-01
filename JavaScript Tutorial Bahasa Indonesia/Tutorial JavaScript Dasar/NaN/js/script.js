document.writeln(`<p>${parseInt("salah")}</p>`)
document.writeln(`<p>${parseFloat("1.1text")}</p>`)

// Number() tidak akan mentolelir kesalahan pada data
document.writeln(`<p>${Number("1.1ups")}`)
document.writeln(`<p>${Number("1x")}`)
document.writeln(`<p>${Number("bukan number")}`)

// Operasi pada NaN
const value1 = Number("salah")
const value2 = 100
const sum = value1 + value2

document.writeln(`<p>${sum}</p>`)

// Fungsi isNaN
document.writeln(`<p>${isNaN(value1)}`)
document.writeln(`<p>${isNaN(value2)}`)