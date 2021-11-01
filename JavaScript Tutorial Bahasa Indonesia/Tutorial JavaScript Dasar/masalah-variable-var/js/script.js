// 1. Studi Kasus 1
// Global Scope
document.writeln(`<p>---X---X---X---Kata Kunci Let---X---X---X---</p>`);
let i = 20;
for (let i = 0; i < 10; i++) {
    // Local Scope
    document.writeln(`<p>Local : Pengulangan ke - ${i}</p>`);
}
document.writeln(`<p>Global : Pengulangan ke - ${i}</p>`);
// 2. Studi Kasus 2
// Global Scope
document.writeln(`<p>---X---X---X---Kata Kunci Var---X---X---X---</p>`);
var j = 20;
for (var j = 0; j < 10; j++) {
    // Local Scope
    document.writeln(`<p>Local : Pengulangan ke - ${j}</p>`);
}
document.writeln(`<p>Global : Pengulangan ke - ${j}</p>`);
