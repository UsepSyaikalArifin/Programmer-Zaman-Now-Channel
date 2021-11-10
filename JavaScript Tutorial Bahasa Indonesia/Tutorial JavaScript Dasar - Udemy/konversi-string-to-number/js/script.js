// 1. parseInt() -> parseFloat() -> Number -> number.t0String()
const value1 = `1`
const value2 = 2
const sum = parseInt(value1) + value2

document.writeln(`<p>${sum}</p>`)

document.writeln(`<p>${parseInt(`1.1`)}</p>`)
document.writeln(`<p>${parseInt(`1.6`)}</p>`)
document.writeln(`<p>${parseFloat(`1.1`)}</p>`)
document.writeln(`<p>${Number(`1.1`)}</p>`)
document.writeln(`<p>${value2.toString()}</p>`)

const a = 1
const b = 1
const total = a.toString() + b.toString()
document.writeln(`<p>${total}</p>`)

// 2. NaN
document.writeln(`<p>${parseInt(`Salah`)}</p>`)
document.writeln(`<p>${parseFloat(`Salah`)}</p>`)
document.writeln(`<p>${parseFloat(`1.1Text`)}</p>`)
document.writeln(`<p>${parseInt(`1.1Text`)}</p>`)
document.writeln(`<p>${parseFloat(`T1.1Text`)}</p>`)
document.writeln(`<p>${parseInt(`T1.1Text`)}</p>`)

document.writeln(`<p>${Number(`Salah`)}</p>`)
document.writeln(`<p>${Number(`Salah`)}</p>`)
document.writeln(`<p>${Number(`1.1Text`)}</p>`)
document.writeln(`<p>${Number(`1.1Text`)}</p>`)
document.writeln(`<p>${Number(`T1.1Text`)}</p>`)
document.writeln(`<p>${Number(`T1.1Text`)}</p>`)