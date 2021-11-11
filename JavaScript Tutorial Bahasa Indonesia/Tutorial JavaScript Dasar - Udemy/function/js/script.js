function sayHello() {
    document.writeln(`<p>Hello World</p>`)
}


const hello_1 = sayHello
const hello_2 = sayHello()

sayHello()
hello_2
hello_1()