// 1. Variable tanpa nilai
let name = `Usep`
if(name === undefined){
    alert(`undefined`)
}else{
    alert(`defined`)
}

// 2. Element yang tidak ada di array
const names = [`Usep`, `Syaikal`]
delete names[0]

if(names[0] === undefined){
    console.info(`array undefined`)
}else{
    console.info(`array defined`)
}

// 3. Properti yang tidak ada di object
const person = {}
if(person.name === undefined){
    console.info(`Properti Object undefined`)
}else{
    console.info(`Properti Object defined`)
}