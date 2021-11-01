// globla scope
let counter = 0;
// global scope
function hitMe() {
    // local scope function hitMe
    counter++; //We Can acces
}
//global scope
function other() {
    // local scope other
}
hitMe();
hitMe();
document.writeln(counter);

// kode local scope
function first() {
    let firstVariable = `First`;
}
function second() {
    let secondVariable = `Second`;
}
first();
second();
// document.writeln(firstVariable);Can't acces
// document.writeln(secondVariable);Can't acces

// nested function scope
function firstFunction() {
    let firstVariable = `FirstFunction`;
    function firstNested() {
        let firstNested = `FirstNested`;
        document.writeln(`<p>${firstVariable}</p>`);
    }
    firstNested();
}

firstFunction();
