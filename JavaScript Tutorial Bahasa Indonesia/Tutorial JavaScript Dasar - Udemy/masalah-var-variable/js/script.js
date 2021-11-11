// 1. Menggunakan Let
let i = 110
for(let i = 1; i <= 10; i++){
    document.writeln(`<p>Local ${i}</p>`)
}
document.writeln(`<p>GLobal ${i}</p>`)

document.writeln(`<p>==X==X==X==X==X==X==</p>`)

var j = 110
for(var j = 1; j <= 10; j++){
    document.writeln(`<p>Local ${j}</p>`)
}
document.writeln(`<p>GLobal ${j}</p>`)