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
