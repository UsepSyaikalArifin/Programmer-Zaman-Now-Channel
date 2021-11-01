const person = {
    address : {
        country : `Indonesia`
    }
}

let country

// if (person.address !== undefined && person.address !== null){
//     country = person.address.country
// }

country = person?.address?.country

document.writeln(`Sukses`)

document.writeln(`<p>${country}</p>`)

document.writeln(`Sukses`)