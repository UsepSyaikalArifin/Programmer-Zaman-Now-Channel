function createFullName(firstName, middleName, lastName) {
    const fullName = `${firstName} ${lastName} ${lastName}`;
    return fullName;
}

const name = createFullName(`Usep`, `Syaikal`, `Arifin`);
document.writeln(`<p>${name}</p>`);

function sum(...numbers) {
    debugger;
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}

const result = sum(1, 1, 1, 1, 1);
document.writeln(`<p>${result}</p>`);
