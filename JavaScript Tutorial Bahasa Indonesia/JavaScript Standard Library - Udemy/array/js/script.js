// 1.Instance Methods Array -> forEach
{
    const names = [`Usep`, `Syaikal`, `Arifin`]
    // 1.1 Anonymous Function
    names.forEach(function(value, index){
        console.info(`${index} : ${value}`)
    })
    
    // 1.2 Arrow function
    names.forEach((value, index) => document.writeln(`<p>${index} : ${value}</p>`))
    
    names.forEach( value => document.writeln(`<p>${value}</p>`))
}

// 2. Array Queue -> push() & shift()
{
    const queue = []

    queue.push(`Usep`)
    queue.push(`Syaikal`)
    queue.push(`Arifin`)

    console.info(queue)
    console.info(queue.shift())
    console.info(queue)
    console.info(queue.shift())
    console.info(queue)
    console.info(queue.shift())
    console.info(queue)
    console.info(queue.shift())
}

// 3.Array Stack -> push() & pop()
{
    const stack = []

    stack.push(`Usep`)
    stack.push(`Syaikal`)
    stack.push(`Arifin`)

    console.info(stack)
    console.info(stack.pop())
    console.info(stack)
    console.info(stack.pop())
    console.info(stack)
    console.info(stack.pop())
    console.info(stack)
    console.info(stack.pop())
}

// 4. Array Search -> 
{
    const source = [1, 2, 3, 4, 6, 1, 2, 3, 4, 5]

    console.info(source.find(value => value > 3))
    console.info(source.findIndex(value => value > 3))
    console.info(source.includes(7))
    console.info(source.indexOf(5))
    console.info(source.lastIndexOf(5))
}

// 5. Array Filter
{
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const ganjil = number.filter(value => value % 2 === 1)
    const genap = number.filter(value => value % 2 === 0)
    console.info(ganjil)
    console.info(genap)
}

// 6. Array Transform
{
    const names = `Usep Syaikal Arifin`.split(` `)
    const namesUpper = names.map(value => value.toUpperCase())
    const namesReduce = names.reduce((before, value) => before + ` ` + value)
    const namesReduceRight = names.reduceRight((before, value) => before + ` ` + value)
    console.info(namesUpper)
    console.info(namesReduce)
    console.info(namesReduceRight)

    const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 10]
    console.info(numbers.reduce((result, value) => result + value))
    console.info(numbers.reduceRight((result, value) => result + value))
}
