// 1.function dengan 1 return value
function sayHello(firstName, lastName){
    say = `Hello ${firstName} ${lastName}`
    return say
}

const result = sayHello(`Usep Syaikal`, `Arifin`)
document.writeln(`<p>${result}</p>`)

// 2. function dengan return value lebih dari satu
function getFinalScore(value){
    if (value > 90){
        return `A`
    }else if (value > 80){
        return `B`
    }else if (value > 70){
        return `C`
    }else if (value > 60){
        return `D`
    }else{
        return `E`
    }
}

const finalValue = getFinalScore(65)

document.writeln(`<p>Nilai = ${finalValue}</p>`)

// 3. Menghentikan Eksekusi Program dengan Return Value
function isContains(array, searchValue){
    for (const element of array){
        if (element === searchValue){
            return true
        }
    }
    return false
}

const searchData = isContains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)
document.writeln(`<p>Hasilnya : ${searchData}</p>`)