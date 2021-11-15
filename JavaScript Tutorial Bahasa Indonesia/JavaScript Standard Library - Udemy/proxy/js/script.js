// 1.
{
const target = {}
const handler = {
    get: function(target, property){
        console.info(`Access Property : ${property}`)
        return target[property]
    },
    set: function(target, property, value){
        console.info(`Change Property => ${property} : ${value}`)
        if(value === null){
            target[property] = ``
        }else{
            target[property] = value
        }
    }
}
const proxy = new Proxy(target, handler)
proxy.firstName = `Usep Syaikal`
proxy.lastName = null
console.info(proxy.firstName)
console.info(proxy.lastName)
console.info(target)
}