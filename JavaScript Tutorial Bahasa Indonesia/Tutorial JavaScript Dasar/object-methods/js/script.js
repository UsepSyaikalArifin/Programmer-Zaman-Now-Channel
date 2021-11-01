// 1. Bentuk Pertama
const person = {
    name: `Usep Syaikal Arifin`,
    sayHello: function (name) {
        document.writeln(`<p>Hello ${name}</p>`);
    },
};
// 2. Bentuk Kedua
function sayHello(name) {
    document.writeln(`<p>Hello ${name}</p>`);
}
const person1 = {
    name: `Usep Syaikal Arifin 2`,
    sayHello: sayHello,
};
// 3. Bentuk Ketiga
const person2 = {
    name: `Usep Syaikal Arifin 3`,
    sayHello: (name) => document.writeln(`<p>Hello ${name}</p>`),
};
person.sayHello(person.name);
person1.sayHello(person1.name);
person2.sayHello(person2.name);

// 4. Menambah Method ke Object
const person3 = {
    name: `Usep Syaikal Arifin 4`,
};
person3.sayHello = (name) => document.writeln(`<p>Hello ${name} Sehat selalu</p>`);
person3.sayHello(person3.name);
