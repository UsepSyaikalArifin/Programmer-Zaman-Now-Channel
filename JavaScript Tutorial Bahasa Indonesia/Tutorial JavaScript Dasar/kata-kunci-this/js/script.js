// 1.Bentuk ke-1
console.info(this);

// 2. Bentuk ke-2
function sample() {
    console.info(this);
}
sample();

// 3. Bentuk ke-3
function sample2() {
    console.info(this);
    function inner1() {
        console.info(this);
    }
    inner1();
}
sample2();

// 4. Bentuk ke-4
const person = {
    name: `Usep Syaikal Arifin`,
    sayHello: function (name) {
        console.info(this);
        document.writeln(`<p>Hi ${name}, my name is ${this.name}</p>`);
    },
};
person.sayHello(`Prof Dr Usep Syaikal Arifin M.Eng M.Sc Ph.D`);
person.sayHello(`Prof Dr Jacob Syaikal Arifin M.Eng M.Sc Ph.D`);
