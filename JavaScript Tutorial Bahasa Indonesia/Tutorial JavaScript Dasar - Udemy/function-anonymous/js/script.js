// 1. Function anonymous sebagai variable
let say = function (nama) {
    document.writeln(`<p>Hallo ${nama}</p>`)
}
say(`Usep Syaikal Arifin`)

// 2. Function sebagai parameter
function giveMeName(nama, callback) {
    callback(nama)
}
giveMeName(`Usep Syaikal Arifin`,function (nama) {
    document.writeln(`<p>Hallo Hi ${nama}</p>`)
})