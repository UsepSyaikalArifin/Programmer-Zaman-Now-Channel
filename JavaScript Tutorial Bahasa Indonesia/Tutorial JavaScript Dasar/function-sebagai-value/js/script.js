// 1. Function sebagai varible
function sayHello(name) {
    document.writeln(`<p>Hello ${name}</p>`);
}

const say = sayHello;

sayHello("Usep Syaikal Arifin");
say("Usep Syaikal Arifin");

// 2. Function sebagai Parameter
const say2 = sayHello;

function giveMeName(callback) {
    callback("Prof Dr Usep Syaikal Arifin M.Eng Ph.D"); //sayHello("Prof Dr Usep Syaikal Arifin M.Eng Ph.D")
}

giveMeName(sayHello);
giveMeName(say2);

const say3 = sayHello;

function giveMeName2(name, callback) {
    callback(`${name}`);
}

giveMeName2(`Usep Syaikal Arifin Ph.D`, sayHello);
giveMeName2(`Usep Syaikal Arifin Ph.D`, say3);
