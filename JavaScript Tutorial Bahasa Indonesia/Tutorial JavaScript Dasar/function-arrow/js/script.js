// 1. Arrow Function Dasar
const sayHello = (name) => {
    const say = `Hello ${name}`;
    document.writeln(`<p>${say}</p>`);
};
sayHello(`Usep Syaikal Arifin`);

// 2. Arrow function tanpa Block
const sayHello2 = (name) => document.writeln(`<p>Hello ${name}</p>`);
sayHello2(`Arrow function tanpa block`);

// 3. Arrow function return value
const sum = (first, second) => first + second;
document.writeln(`<p>Hasil penjumlahan : ${sum(10, 10)}</p>`);

// 4. Arrow function tanpa kurung parameter
const sayHello3 = (name) => document.writeln(`<p>Hello ${name}</p>`);
sayHello3(`Prof Dr Usep Syaikal Arifin M.Eng M.Sc Ph.D`);

// 5. Arrow function sebagai parameter
function giveMeName(name, callback) {
    callback(`${name}`);
}
const name = `Usep Syaikal Arifin Ph.D`;
giveMeName(name, (name) => document.writeln(`<p>Hello ${name} sehat selalu</p<`));
