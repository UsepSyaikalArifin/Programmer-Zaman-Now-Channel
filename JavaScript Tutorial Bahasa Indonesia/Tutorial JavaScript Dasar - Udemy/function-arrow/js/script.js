// 1. Bentuk ke - 1 Arrow Function
const sayHello = (nama) =>{
    const say = `Hello ${nama}`
    document.writeln(`<p>${say}</p>`)
}

sayHello(`Usep Syaikal Arifin`)

// 2. Bentuk ke - 2 Arrow function tanpa block
const sayHello2 = (nama) => document.writeln(`<p>Hello ${nama}</p>`)
sayHello2(`Arifin Syaikal Usep`)

// 3. Bentuk ke - 3 Arrow function dengan return value
const sum = (first, second) => {
    return first + second
}

const sum2 = (first, second) => first + second
sum2(1, 2)

document.writeln(`<p>${sum(100, 200)}</p>`)
document.writeln(`<p>${sum2(100, 200)}</p>`)

// 4. Bentuk ke - 4 Arrow function tanpa kurung parameter
const sayHello3 = nama => document.writeln(`<p>${nama}</p>`)
sayHello3(`Usep Arifin Syaikal`)

// 5. Bentuk ke - 5 Arrow function sebagai parameter
function giveMeName(nama, pFunction) {
    pFunction(nama)
}

giveMeName(`Usep Syaikal Arifin Ph.D`, (nama) => document.writeln(`<p>${nama}</p>`))