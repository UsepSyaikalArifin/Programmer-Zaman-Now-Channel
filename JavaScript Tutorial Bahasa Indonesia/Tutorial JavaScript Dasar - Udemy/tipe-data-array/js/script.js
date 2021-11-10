// 1.
let arrayKosong = []
let arrayNama = [`Usep Syaikal Arifin`,`Muhammad Benjamin Partowidagdo`,`Muhammad Bunyamin Sarmowidagdo`]
let arrayCampuran = [1, `Usep`, undefined, null, NaN]

console.table(arrayKosong)
console.table(arrayNama)
console.table(arrayCampuran)

// 2. Menambah Array
const names = []
names.push(`Usep Syaikal Arifin`)
names.push(`Muhamaad Benjamin Partowidagdo`, `Muhammad Bunyamin Sarmowidagdo`)
names.push(`Joko`, `Widodo`, `Budi`)

console.table(names)
console.info(names[0])
console.info(names[1])
console.info(names[2])

names[0] = `Programmer`
console.table(names)

delete names[3]
console.table(names)
names.push(`Joko Lagi`)
names[3] = "Budi Lagi"
console.table(names)
names.push(1, 2, 3, 4, 5)
names.push([1, 2, "1",  `2`, 3, [1, 2, 3, 4, [`Usep`,`Syaikal`]]])
console.table(names)

