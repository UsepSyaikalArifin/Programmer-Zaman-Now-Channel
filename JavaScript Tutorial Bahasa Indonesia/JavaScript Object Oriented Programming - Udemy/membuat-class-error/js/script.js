
class ValidationError extends Error{
    constructor(message, field){
        super(message)
        this.field = field
    }
}

class MathUtil{
    static sum(...numbers){

        if(numbers.length === 0){
            throw new ValidationError(`Terjadi kesalahan`,`numbers`)
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
}catch(error){
    if(error instanceof ValidationError){
        console.info(`Error : ${error.message} di: ${error.field}`)
    }else{
        console.info(`Error : ${error.message}`)
    }
}finally{
    console.info(`Program selesai`)
}