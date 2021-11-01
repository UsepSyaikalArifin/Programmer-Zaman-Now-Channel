const orang = {}

// Menambah atau Mengubah
orang["nama"] = "Usep Syaikal Arifin"
orang["alamat"] = "Indonesia"
orang["umur"] = 25

console.table(orang)

delete orang["umur"]

console.table(orang)

// Membuat Object Langsung
const person = {
    name : "Usep Syaikal Arifin",
    alamat : "Indonesia",
    age : 25,
}

console.table(person)

// Mengakses Property Object
console.info(`Nama : ${person.name}`)
console.info(`Alamat : ${person.alamat}`)
console.info(`Usia: ${person.age}`)