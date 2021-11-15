// 1. Kode Map
const map = new Map()
map.set(`Name` , `Usep Syaikal`)
map.set(`Address` , `Indoensia`)


console.info(`===X===X===X===X===X===map===X===X===X===X===X===`)
console.info(map)
console.info(map.get(`Name`))
console.info(map.get(`Address`))
console.info(`===X===X===X===X===X===for of===X===X===X===X===X===`)
for (const element of map) {
    console.info(element)
}
console.info(`===X===X===X===X===X===for of===X===X===X===X===X===`)
for (const element of map) {
    console.info(`${element[0]} : ${element[1]}`)
}
console.info(`===X===X===X===X===X===for Each===X===X===X===X===X===`)
map.forEach((value, key) => console.info(`${key} : ${value}`))