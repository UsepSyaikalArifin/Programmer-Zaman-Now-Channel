class MathUtil{
    static sum(...numbers){
        if(numbers.length === 0){
            throw new Error(`Data tidak terpenuhi`)
        }
        let total = 0
        for (const number of numbers) {
            total += number
        }
        return total
    }
}

try{
    console.info(MathUtil.sum())
    console.info(`Kode Blok Try Again`)
}catch(error){
    console.info(`Terjadi error : ${error.message}`)
}finally{
    console.info(`Program selesai`)
}

class Counter{
    #counter = 0

    next(){
        try{
            return this.#counter
        }finally{
            this.#counter++
        }
    }
}

const counter = new Counter()
console.info(counter.next())
console.info(counter.next())
console.info(counter.next())