let data
if(typeof data === `number`){
    console.info(`number`)
}else if( typeof data === `string`){
    console.info(`string`)
}else if(typeof data === `boolean`){
    console.info(`boolean`)
}else{
    console.info(`Object`)
}