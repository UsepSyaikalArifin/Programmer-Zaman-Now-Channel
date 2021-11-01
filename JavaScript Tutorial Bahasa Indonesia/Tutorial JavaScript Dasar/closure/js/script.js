// 1. Closure
function createAdder(ownerValue, value) {
    const owner = ownerValue;
    function add(param) {
        document.writeln(`<p>${owner}</p>`);
        return value + param;
    }
    return add;
}
const addTwo = createAdder(`Usep`, 2);
/*
 function addTwo(param){
    console.info(``)
    return 2 + param
}
*/
document.writeln(`<p>${addTwo(10)}</p>`);
document.writeln(`<p>${addTwo(100)}</p>`);
document.writeln(`<p>${addTwo(1000)}</p>`);
document.writeln(`<p>${addTwo(10000)}</p>`);
