// 1. Kode factorial menggunakan Pengulangan
function factorial(value) {
    let result = 1;
    for (let i = value; i >= 1; i--) {
        result *= i;
    }
    return result;
}
const value = 7;
const resultFactorial = factorial(value);
document.writeln(`<p>Pengulangan : Nilai factorial ${value} adalah ${resultFactorial}</p>`);

// 2. Kode Factorial menggunakan recursive
function factorialRecursive(value) {
    if (value === 1) {
        return 1;
    } else {
        return value * factorialRecursive(value - 1);
    }
}
const resultFactorialRecursive = factorialRecursive(value);
document.writeln(`<p>Recursive Function : Nilai factorial ${value} adalah ${resultFactorialRecursive}</p>`);

// factorialRecursive(5)
// 5 * factorialRecursive(4)
// 5 * 4 * factorialRecursive(3)
// 5 * 4 * 3 * factorialRecursive(2)
// 5 * 4 * 3 * 2 * factorialRecursive(1)
// 5 * 4 * 3 * 2 * 1
