const person = {}
Reflect.set(person, `firstName`, `Usep Syaikal`)
Reflect.set(person, `lastName`, `Arifin`)
console.info(person)
console.info(Reflect.has(person, `firstName`))
console.info(Reflect.has(person, `lastName`))
console.info(Reflect.get(person, `firstName`))
console.info(Reflect.get(person, `lastName`))