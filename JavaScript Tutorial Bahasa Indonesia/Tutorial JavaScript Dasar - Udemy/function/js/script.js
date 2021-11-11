// 1. Bentuk ke - 1
function sayHello() {
    document.writeln(`<p>Hello World</p>`)
}

// variable berisi function
const hello_1 = sayHello
const hello_2 = sayHello()

// pemanggilan function
sayHello()
hello_2
hello_1()