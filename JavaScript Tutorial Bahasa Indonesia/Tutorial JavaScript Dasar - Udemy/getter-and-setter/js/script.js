const person = {
    firstName :  `Usep Syaikal`,
    lastName : `Arifin`,
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(val){
        const array = val.split(` `)
        this.firstName = array[0]
        this.lastName = array[1]
    }
}

person.firstName = `Prof Usep Syaikal`
document.writeln(`<p>${person.fullName}</p>`)
person.fullName = `Prof Usep`
document.writeln(`<p>${person.fullName}</p>`)