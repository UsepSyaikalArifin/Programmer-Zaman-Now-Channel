// 1. Tanpa Nullish Coalescing Operator
let parameter

let data = parameter
if (data === undefined || data === null){
    data = "Nilai Default"
}

document.writeln(`<p>${data}</p>`)

// 2. Nullish Coalesing Operator
data = parameter ?? "Nilai Default"

document.writeln(`<p>${data}</p>`)