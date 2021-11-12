class Person{
    say(name){
        if(name){
            this.#sayWithName(name)
        }else{
            this.#sayWithoutName()
        }
    }

    #sayWithoutName(){
        document.writeln(`<p>Hello</p>`)
    }

    #sayWithName(name){
        document.writeln(`<p>Hello ${name}</p>`)
    }
}

const usep = new Person()
usep.say(`Jacob`)