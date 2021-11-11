// 1. Function ekspression bentuk ke - 1
function sayHello(nama) {
    document.writeln(`<p>Hello ${nama}</p>`)
}

let say = sayHello
sayHello(`Usep Syaikal Arifin`)
say(`Usep`)

// 2. Function ekspression bentuk ke - 2
function giveMeName(nama, callback) {
    callback(nama)
}
giveMeName(`Jagoan 2`,sayHello)
giveMeName(`Jagoan`, say)