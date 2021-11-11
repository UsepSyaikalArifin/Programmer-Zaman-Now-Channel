// 1. Bentuk ke - 1
function  sayHello(firstName, lastName) {
    return `Hello ${firstName} ${lastName}`
}

const hello = sayHello(`Usep`, `Syaikal`)
const hello_2 = sayHello

document.writeln(`<p>${sayHello(`USEP`, `SYAIKAL`)}</p>`)
document.writeln(`<p>${hello}</p>`)
document.writeln(`<p>${hello_2(`Usep`, `Syaikal`)}</p>`)

// 2. Bentuk ke - 2
function getFinalScore(value) {
    if(value > 90){
        return `A`
    }else if(value > 80){
        return `B`
    }else if(value > 70){
        return `C`
    }else if(value > 60){
        return `D`
    }else{
        return `E`
    }
}

const nilai = getFinalScore(95)
document.writeln(`<p>${nilai}</p>`)

// 3. Bentuk ke - 3
function isContains(array, searchValue) {
    for(const element of array){
        if(element === searchValue){
            return true
        }
    }
    return false
}

const array = [1, 2, 3, 4, 5, 6,7, 8]
const search = 8
document.writeln(`<p>${isContains(array, search)}</p>`)    