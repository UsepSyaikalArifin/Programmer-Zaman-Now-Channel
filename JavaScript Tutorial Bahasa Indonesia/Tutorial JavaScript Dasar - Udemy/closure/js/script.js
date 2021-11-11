// 1. Bentuk ke - 1
function  createAdder(value) {
    const owner = `Usep`
    function  add(param) {
        document.writeln(`<p>${owner}</p>`)
        return value + param
    }
    return add
}

const addTwo = createAdder(2)
const addTen = createAdder(10)
document.writeln(`<p>${addTwo(20)}</p>`)
document.writeln(`<p>${addTwo(10)}</p>`)
document.writeln(`<p>${addTen(20)}</p>`)
document.writeln(`<p>${addTen(10)}</p>`)