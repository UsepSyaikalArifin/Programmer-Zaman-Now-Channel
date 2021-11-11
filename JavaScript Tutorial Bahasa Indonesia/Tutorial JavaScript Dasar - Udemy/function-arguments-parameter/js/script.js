function oldSum() {
    let total = 0
    for(const item of arguments){
        total += item
    }
    document.writeln(`<p>Total = ${total}`)
}

oldSum(1, 2, 3, 4, 5, 6)
oldSum(10, 20, 30, 40, 50, 60)