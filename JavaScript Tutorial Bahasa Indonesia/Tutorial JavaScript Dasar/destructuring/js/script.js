// 1. Tanpa Destructuring Array
document.writeln(`<p>---X---X---Tanpa Destructuring Array---X---X---</p>`);
const names = [`Usep`, `Syaikal`, `Arifin`];
const firstName = names[0];
const middleName = names[1];
const lastName = names[2];
document.writeln(firstName);
document.writeln(middleName);
document.writeln(lastName);

// 2. Destructuring Array
document.writeln(`<p>---X---X---Destructuring Array---X---X---</p>`);
const names2 = [`Usep`, `Syaikal`, `Arifin`, `Jhon`, `Jackson`];
const [firstName2, middleName2, lastName2, ...other] = names2;
document.writeln(`<p>FirstName = ${firstName}</p>`);
document.writeln(`<p>MiddleName = ${middleName}</p>`);
document.writeln(`<p>LastName = ${lastName}</p>`);
document.writeln(`<p>other = ${other}</p>`);

// 3. Tanpa Destructuing Object
document.writeln(`<p>---X---X---Tanpa Destructuing Object---X---X---</p>`);
const person = {
    firstName: `Usep`,
    lastName: `Syaikal`,
    address: {
        street: `Jalan Belum Ada`,
        city: `Jakarta`,
        country: `Indonesia`,
    },
    hobby: `Game`,
    channel: `Programmer Zaman Now`,
};
const firstName3 = person.firstName;
const lastName3 = person.lastName;
document.writeln(`<p>FirstName3 = ${firstName3}</p>`);
document.writeln(`<p>MiddleName3 = ${lastName3}</p>`);

// 4.Destructuring Object
document.writeln(`<p>---X---X---Destructuring Object---X---X---</p>`);
const person2 = {
    firstName4: `Usep`,
    middleName4: `Syaikal`,
    lastName4: `Arifin`,
    address4: {
        street: `Jalan Belum Ada`,
        city: `Jakarta`,
        country: `Indonesia`,
    },
    hobby4: `Games`,
    channel4: `Programmer Zaman Now`,
};

const { firstName4, middleName4, lastName4, address4, ...other2 } = person2;
document.writeln(`<p>FirstName4 = ${firstName4}</p>`);
document.writeln(`<p>MiddleName = ${middleName4}</p>`);
document.writeln(`<p>LastName4 = ${lastName4}</p>`);
document.writeln(`<p>LastName4 = ${address4.street}</p>`);
document.writeln(`<p>Other2 = ${other2.hobby4}</p>`);

// 5. Destructuring Nested Object
document.writeln(`<p>---X---X---Destructuring Nested Object---X---X---</p>`);
const person3 = {
    firstName5: `Usep`,
    middleName5: `Syaikal`,
    lastName5: `Arifin`,
    address5: {
        street: `Jalan Belum Ada`,
        city: `Jakarta`,
        country: `Indonesia`,
    },
    hobby5: `Games`,
    channel5: `Programmer Zaman Now`,
};
const {
    firstName5,
    middleName5,
    lastName5,
    address5: { street, city, country },
    ...other3
} = person3;
document.writeln(`<p>FirstName5 = ${firstName5}</p>`);
document.writeln(`<p>MiddleName5 = ${middleName}</p>`);
document.writeln(`<p>LastName5 = ${lastName}</p>`);
document.writeln(`<p>Street = ${street}</p>`);

// 6.Destructuring di Function Parameter bentuk Objeck
document.writeln(`<p>---X---X---Destructuring di Function Parameter bentuk Object---X---X---</p>`);
const person4 = {
    firstName6: `Usep`,
    middleName6: `Syaikal`,
    lastName6: `Arifin`,
};
function displayPerson({ firstName6, middleName6, lastName6 }) {
    document.writeln(`<p>FirstName : ${firstName6}</p>`);
    document.writeln(`<p>MiddleName : ${middleName6}</p>`);
    document.writeln(`<p>LastName : ${lastName6}</p>`);
}
displayPerson(person4);

// 6.Destructuring di Function Parameter bentuk Array
document.writeln(`<p>---X---X---Destructuring di Function bentuk Array---X---X---</p>`);
function sum([first, second]) {
    return first + second;
}
document.writeln(`<p>Total = ${sum([10, 11])}</p>`);
document.writeln(`<p>Total = ${sum([20, 22])}</p>`);

// 7.Destructuring Default Value di Function Parameter bentuk Array
document.writeln(`<p>---X---X---Destructuring Default Value di Function Parameter bentuk Array---X---X---</p>`);
const names4 = [`Usep`, `Syaikal`, `Arifin`];
const [firstName7, middleName7, lastName7, oldName = `Ph.D`] = names4;
document.writeln(`<p>FirstName = ${firstName7}</p>`);
document.writeln(`<p>MiddleName = ${middleName7}</p>`);
document.writeln(`<p>LastName = ${lastName7}</p>`);
document.writeln(`<p>OldName = ${oldName}</p>`);

// 8.Destructuring Default Value di Function Parameter bentuk Object
document.writeln(`<p>---X---X---Destructuring Default Value di Function Parameter bentuk Object---X---X---</p>`);
const person5 = {
    firstName8: `Usep`,
    middleName8: `Syaikal`,
    lastName8: `Arifin`,
};
let { firstName8, middleName8, lastName8, old = `Ph.D` } = person5;
document.writeln(`<p>FirtsName8 = ${firstName8}</p>`);
document.writeln(`<p>MiddleName = ${middleName8}</p>`);
document.writeln(`<p>LastName = ${lastName8}`);
document.writeln(`<p>oldName = ${oldName}</p>`);

// 9.Destructuring Nama Variable Lain di Function Parameter bentuk Object
document.writeln(`<p>---X---X---Destructuring Nama Variable Lain di Function Parameter bentuk Object---X---X---</p>`);
const person6 = {
    firstName9: `Usep`,
    middleName9: `Syaikal`,
    lastName9: `Arifin`,
};
let { firstName9: namaDepan, middleName9: namaTengah, lastName9: namaAkhir, oldName2 = `Ph.D` } = person6;
document.writeln(`<p>NamaDepan = ${namaDepan}</p>`);
document.writeln(`<p>NamaTengah = ${namaTengah}</p>`);
document.writeln(`<p>NamaAkhir = ${namaAkhir}`);
document.writeln(`<p>oldName = ${oldName2}</p>`);
