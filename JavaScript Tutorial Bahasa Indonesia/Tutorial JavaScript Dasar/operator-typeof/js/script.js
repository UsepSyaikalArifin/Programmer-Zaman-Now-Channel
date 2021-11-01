let data

if (typeof data === "number"){
    console.info(`Number`)
}else if(typeof data === "string"){
    console.info(`String`)
}else if(typeof data === "boolean"){
    console.info(`Boolean`)
}else{
    console.info(`Object`)
}