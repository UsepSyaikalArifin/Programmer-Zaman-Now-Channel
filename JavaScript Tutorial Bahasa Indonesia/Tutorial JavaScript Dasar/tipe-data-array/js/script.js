let arrayKosong = []
let arrayNama = ["Usep", "Syaikal", "Arifin"]

// Menambah Data
const names = []
names.push("Usep")
names.push("Syaikal", "Arifin")
names.push("Budi", "Joko", "Rudi")

console.table(names)

// Operasi di Array
names[0] = "Budi"
console.table(names)
console.info(names.length)

console.info(names[0])
console.info(names[1])
console.info(names[2])

delete names[3]

console.table(names)

names.push("Budi Lagi")
console.table(names)

names[3] = "Diisi Lagi Setelah di Hapus"
names.push(1, 2, 3, 4, 5)
names.push(["Usep", "Syaikal", "Arifin"])
console.table(names)