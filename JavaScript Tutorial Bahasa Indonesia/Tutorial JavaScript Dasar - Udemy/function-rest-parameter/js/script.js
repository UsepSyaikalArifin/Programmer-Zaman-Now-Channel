function sum(name, ...data) {
    let total = 0
    for(const item of data){
        total += item
    }
    document.writeln(`<p>${name} : ${total}</p>`)
}
sum(`Apel`, 1, 2, 3, 4, 5, 6)
sum(`Banana`, 10, 20, 30, 40, 50, 60)

const values = [10, 20, 30, 40, 50, 60]
sum(`Banana`, ...values)