// 1. Bentuk ke - 1
const person = {
    nama : `Usep`,
    sayHello : (nama) => document.writeln(`<p>Hello ${nama}</p>`)
}
person.sayHello(`Usep Syaikal Arifin Ph.D`)
// 2. Bemtuk ke - 2
const person2 = {
    nama : `Usep Ph.D`,
    sayHello : function (nama) {
        document.writeln(`<p>${nama}</p>`)
    }
}

person2.sayHello(person2.nama)

// 2. Menambah Method ke Object
const person3 = {
    nama : `Person3`
}
person3.sayHello = (nama) => document.writeln(`<p>Hello ${nama}</p>`)
person3.sayHello(person3.nama)