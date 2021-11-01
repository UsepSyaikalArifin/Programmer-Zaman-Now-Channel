// 1. Studi Kasus Function Generator Simple
function* createNames() {
    yield `Usep`;
    yield `Syaikal`;
    yield `Arifin`;
}

const names = createNames();
for (const name of names) {
    document.writeln(`<p>Nama : ${name} </p>`);
}

// 2. Studi Kasus Function Generator Komplek
// Sifat Generator Function adalah Lazy
function* buatGanjil(value) {
    for (let i = 1; i <= value; i++) {
        if (i % 2 === 1) {
            document.writeln(`<p>Yield ${i}</p>`);
            yield i;
        }
    }
}
// perbandingan dengan array
// Sifat function array adalah eager
function buatGanjilArray(value) {
    let arrayBuatGanjil = [];
    for (let i = 1; i <= value; i++) {
        if (i % 2 === 1) {
            document.writeln(`<p>Yield ${i}</p>`);
            arrayBuatGanjil.push(i);
        }
    }
    return arrayBuatGanjil;
}
const angkaGanjil1 = buatGanjil(10);
for (const angka of angkaGanjil1) {
    document.writeln(`<p>Function Generator => Angka Ganjil : ${angka}</p>`);
}
const angkaGanjil2 = buatGanjilArray(10);
for (const angka of angkaGanjil2) {
    document.writeln(`<p>Function & Array => Angka Ganjil : ${angka}</p>`);
}

// 3.Kode Lazy Generator
function* buatGanjil3(value) {
    for (let i = 1; i <= value; i++) {
        if (i % 2 === 1) {
            document.writeln(`<p>Pengulangan ke ${i}</p>`);
            yield i;
        }
    }
}

const angkaGanjil3 = buatGanjil3(20);
document.writeln(`<p>${angkaGanjil3.next().value}`);
document.writeln(`<p>${angkaGanjil3.next().value}`);
document.writeln(`<p>${angkaGanjil3.next().value}`);
