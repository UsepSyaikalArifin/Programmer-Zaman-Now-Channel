class MathUtil{
    static sum(...numbers){

        if(numbers.length === 0){
            throw new Error(`Saudara tidak memasukan data apapun`)
        }

        let total = 0
        for(const number of numbers){
            total += number
        }
        return total
    }
}

console.info(MathUtil.sum(1,1,1))
console.info(MathUtil.sum())
console.info(MathUtil.sum(1,1,1))