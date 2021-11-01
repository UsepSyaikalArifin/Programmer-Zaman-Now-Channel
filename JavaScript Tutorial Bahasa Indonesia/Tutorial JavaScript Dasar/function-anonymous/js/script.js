// 1.Anonymous Function di Variable
const say = function (name) {
    document.writeln(`<p>Hello ${name} Sukses Selalu`);
};
say(`Prof Dr Usep Syaikal Arifin M.Eng Ph.D`);
say(`Usep Syaikal Arifin`);

// 2. Anonymous Function di Parameters
function giveMeName(callback) {
    callback(`Prof Dr Usep Syaikal Arifin M.Eng Ph.D`);
}
giveMeName(function (name) {
    document.writeln(`<p>Hello ${name} Sukses Selalu`);
});

function giveMeName2(name, callback) {
    callback(`${name}`);
}

giveMeName2(`Usep Syaikal Arifin Ph. D`, function (name) {
    document.writeln(`<p>Hello ${name} Sukse Selalu</p>`);
});
