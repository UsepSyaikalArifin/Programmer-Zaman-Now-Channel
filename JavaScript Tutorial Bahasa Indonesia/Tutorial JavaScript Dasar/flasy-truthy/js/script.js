let data = ``
let data2 = `False`
let data3 = []
let data4 = {}

if (data){
    console.info(`String Kosong = Truthy Data`)
}else{
    console.info(`String Kosong = Falsey Data`)
}

if (data2){
    console.info(`String Tidak Kosong = Truthy Data`)
}else{
    console.info(`String Tidak Kosong = Falsey Data`)
}

if (data3){
    console.info(`Array Kosong = Truthy Data`)
}else{
    console.info(`Array Kosong = Falsey Data`)
}

if (data4){
    console.info(`Object Kosong = Truthy Data`)
}else{
    console.info(`Object Kosong = Falsey Data`)
}