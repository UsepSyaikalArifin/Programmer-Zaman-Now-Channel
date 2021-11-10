let parameter
let data = parameter
if(data === undefined || data === null){
    data = `Nilai Default`
}else{
    data = data
}

console.info(data)

data = parameter?? `Niali Default`

console.info(data)
