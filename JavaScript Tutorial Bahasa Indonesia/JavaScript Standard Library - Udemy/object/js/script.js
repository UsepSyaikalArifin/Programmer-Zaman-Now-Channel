// 1. Object freeze
{const person = {
    firstName : `Usep Syaikal`,
    lastName : `Arifin`
}
Object.freeze(person)

person.firstName = `Diubah` // Tidak bisa di ubah
delete person.firstName  //Tidak bisa di hapus
console.info(person)}

// 2. Object seal
{const person = {
    firstName : `Usep Syaikal`,
    lastName : `Arifin`
}
Object.seal(person)

person.firstName = `Diubah` // bisa di ubah
delete person.lastName  //Tidak bisa di hapus
console.info(person)}

// 3. Object Assign -> Menggabungkan Object
{
    const target = {firstName : `Usep Syaikal`}
    const source = {lastName : `Arifin`}
    Object.assign(target, source)
    console.info(target)
}

// 4. Object property Names & Value
{
    const person = {
        firstName : `Usep Syaikal`,
        lastName :  `Arifin`
    }

    console.info(Object.values(person))
    console.info(Object.getOwnPropertyNames(person))
}