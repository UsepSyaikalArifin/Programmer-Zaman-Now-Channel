// 1.Arrow Function di Object Model
const person = {
    name: `Usep Syaikal Arifin`,
    sayHello: (name) => {
        console.info(this);
        document.writeln(`<p>Hello ${name}</p>`);
    },
};
person.sayHello(`Prof Dr Usep Syaikal Arifin M.Eng M.Sc Ph.D`);
