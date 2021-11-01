// 1 Tanpa Ternery Operator
const nilai = 80
let ucapan

if (ucapan >= 75){
    ucapan = `Selamat anda lulus`
}else{
    ucapan = `Silahkan coba lagi`
}

document.writeln(`<p>${ucapan}</p>`)

// 2 Ternary Operator
const value = 80
const result = value >= 75 ? `Selamat anda lulus` : `Silahkan coba lagi`

document.writeln(`<p>${result}</p>`)