// 1. Tanpa recursive function
function nFactorial(n) {
    let result = 1
    let arrResult = []
    for(let i = n; i > 0; i--){
        arrResult.push(i)
        result *= i
    }
    document.writeln(`<p>${arrResult} = ${result}</p>`)
    return result
}
// 2. Menggunakan Recursive Function
function factorial(n) {
    if(n === 0){
        return 1
    }
    return n*factorial(n-1)
}

const resultFactorial = factorial(40)
const nresultFactorial = nFactorial(20)
document.writeln(`<p>${resultFactorial}</p>`)
document.writeln(`<p>${nresultFactorial}</p>`)