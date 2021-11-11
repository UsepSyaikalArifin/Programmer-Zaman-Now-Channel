// 1.
{
const names = [`Usep`, `Syaikal`, `Arifin`]
const firstName = names[0]
const middleName = names[1]
const lastName = names[2]
document.writeln(`<p>${firstName}</p>`)
document.writeln(`<p>${middleName}</p>`)
document.writeln(`<p>${lastName}</p>`)
}

// 2.
{
const names2 =  [`Usep`, `Syaikal`, `Arifin`, `Joko`]
const [firstName2, middleName2, lastName2, ...other] = names2
document.writeln(`<p>${firstName2}</p>`)
document.writeln(`<p>${middleName2}</p>`)
document.writeln(`<p>${lastName2}</p>`)
document.writeln(`<p>${other[0]}</p>`)
}

// 3.
{
const person = {
    firstName3 : `Usep`,
    lastName3   : `Syaikal`,
    address : {
        street : `Jalan Belum Ada`,
        city : `Jakarta`,
        country : `Indonesia`
    },
    hobby : `Game`,
    channel :  `Programmer Zaman Now`
}

const {firstName3, lastName3, address :{city, street, country}, ...others2} = person
document.writeln(`<p>${city}</p>`)
}

// 4. Destructuring di function Parameter
{
function displayPerson({firstName, middleName, lastName}){
    console.info(firstName)
    console.info(middleName)
    console.info(lastName)
}
const person = {
    firstName : `Prof Usep`,
    middleName : `Syaikal Arifin`,
    lastName : `M.Sc M.Eng Ph.D `
}

displayPerson(person)
}

// 5. Destructuring di Array
{
function sum([first, second]){
    return first + second
}
console.info(sum([10, 20]))
console.info(sum([100, 200]))
}

// 6. Destructuring Default Value di Array
{
const names2 =  [`Usep`, `Syaikal`]
const [firstName2, middleName2, lastName2 = `Arifin`] = names2
document.writeln(`<p>${firstName2}</p>`)
document.writeln(`<p>${middleName2}</p>`)
document.writeln(`<p>${lastName2}</p>`)
}

// 7. Destructuring Default Value di Object
{
const person = {
    firstName : `Usepxx`,
    lastName   : `Syaikal`
}

const {firstName, lastName, hobby = `Game`} = person
document.writeln(`<p>${firstName}</p>`)
document.writeln(`<p>${lastName}</p>`)
document.writeln(`<p>${hobby}</p>`)
}

// 8. Destructuring Default Value di Object dengan Nama Lain
{
    const person = {
        firstName : `UsepxxX`,
        lastName   : `SyaikalXXX`
    }
    
    const {firstName:namaDepan,
           lastName:namaAkhir,
           hobby:Kesukaan = `GameX`} = person
    document.writeln(`<p>${namaDepan}</p>`)
    document.writeln(`<p>${namaAkhir}</p>`)
    document.writeln(`<p>${Kesukaan}</p>`)
    }