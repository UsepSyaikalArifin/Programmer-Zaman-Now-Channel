// 1. Operator Perbandingan &&
const nilaiUjian = 90
const nilaiAbsensi = 70

const lulusUjian = nilaiUjian > 75
const lulusAbsensi = nilaiAbsensi > 75

const lulus = lulusUjian && lulusAbsensi
const lulus2 = lulusUjian || lulusAbsensi
document.writeln(`<p> ${lulus} </p>`)
document.writeln(`<p> ${lulus2} </p>`)