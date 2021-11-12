    // 1. Tidak Rekomendasikan
    // class Person{
    //     constructor(name){
    //         this.name = name
    //         this.sayHello = function(name){
    //             console.info(`Hi ${name}, My name is ${this.name}`)
    //         }
    //     }
    // }

    // 2. Rekomendasikan
    class Person{
        constructor(name){
            this.name = name
        }
        sayHello(name){
            console.info(`Hi ${name}, My name is ${this.name}`)
        }
    }

    const usep = new Person(`Usep`)
    const asep = new Person(`Asep`)

    console.info(usep)
    console.info(asep)

    usep.sayHello(`Jagoan`)
    asep.sayHello(`Jagoan`)