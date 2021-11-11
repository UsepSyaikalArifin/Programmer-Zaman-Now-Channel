function sayHello(firstName, lastName) {
    document.writeln(`<p>Hello ${firstName} ${lastName}</p>`)
}

const hello = sayHello
const hello_2 = sayHello(`Usep`, `Syaikal`)

sayHello(`Usep`, `Syaikal`)
hello(`Jago`, `Coding`)