let name
if(name === undefined){
    console.info(`UNDEFINED`)
}else{
    console.info(`DEFINED`)
}

// Undefined Array Undefined
const names = [`Usep`,`Syaikal`]

if (names[2] === undefined){
    console.info('Hello World')
}else{
    console.info(`Hello ${names[2]}`)
}

// Undefined Object Property
let person = {}

if (person.name === undefined){
    console.info("Object Poperty Undefined")
}else{
    console.info(`Hello ${person.name}`)
}