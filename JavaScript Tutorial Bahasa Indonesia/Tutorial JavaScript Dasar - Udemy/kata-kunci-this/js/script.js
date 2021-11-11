// 1. this ke window
console.info(this)

function sample() {
    console.info(this)
}
sample()

function  sample2() {
    function  innerSample2() {
        console.info(this)
    }
    innerSample2()
}

sample2()

// 2. this ke obejct
const person = {
    nama : `Usep Syaikal Arifin`,
    sayHello : function(nama){
        document.writeln(`<p>Hi ${nama}, my name is ${this.nama}</p>`)
    }
}

person.sayHello(`Jagoan`)
person.sayHello(`Joko`)