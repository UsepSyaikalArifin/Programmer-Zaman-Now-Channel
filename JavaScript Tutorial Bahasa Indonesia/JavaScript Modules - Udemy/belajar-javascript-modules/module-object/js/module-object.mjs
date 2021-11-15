export const firstName = `Usep`
export const middleName =  `Syaikal`
export const lastName = `Arifin`

export function hello(name){
    console.info(`Hello ${name} from ${firstName} ${middleName} ${lastName} `)
}

export class Person{
    constructor(name){
        this.name = name
    }
}