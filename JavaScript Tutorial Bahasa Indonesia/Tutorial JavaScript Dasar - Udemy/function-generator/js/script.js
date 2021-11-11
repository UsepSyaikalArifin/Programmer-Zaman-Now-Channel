// 1. Bentuk ke - 1
function* createNames() {
    yield `Usep`
    yield `Syaikal`
    yield `Arifin`
}

const names = createNames()
for(name of names){
    document.writeln(`<p>${name}</p>`)
}

// 2. Bentuk ke - 2
function buatGanjilArray(value){
    const result = []
    for(let i = 1; i <= value; i++){
        if(i % 2 === 1){
            document.writeln(`<p>Yield${i}</p>`)
            result.push(i)
        }
    }
    return result    
}

function* buatGanjil(value){
    for(let i = 1; i <= value; i++){
        if(i % 2 === 1){
            document.writeln(`<p>Yield${i}</p>`)
            yield i
        }
    }    
}

const angkaGanjilArray = buatGanjilArray(10)
const angkaGanjil = buatGanjil(10)

for (const iterator of angkaGanjilArray) {
    document.writeln(`<p>${iterator}</p>`)
}
document.writeln(`<p>==X==X==X==X==X==X==</p>`)
for (const iterator of angkaGanjil) {
    document.writeln(`<p>${iterator}</p>`)
}

document.writeln(`<p>==X==X==X==X==X==X==</p>`)
// document.writeln(`<p>${angkaGanjil.next().value}</p>`)
// document.writeln(`<p>${angkaGanjil.next().value}</p>`)