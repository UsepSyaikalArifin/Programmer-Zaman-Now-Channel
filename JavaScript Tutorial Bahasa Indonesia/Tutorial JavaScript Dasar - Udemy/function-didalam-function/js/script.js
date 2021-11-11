// 1. bentuk 1 tanpa parameter
function outer() {
    function inner() {
        document.writeln(`<p>Hello I'm Inner Function</p>`)
    }
    inner()
}

outer()

// 2. 
function outer2(nama) {
    function inner2(nama) {
        document.writeln(`<p>Hello ${nama} I'm Inner Function</p>`)
    }
    inner2(nama)
}

outer2(`Usep Syaikal Arifin`)