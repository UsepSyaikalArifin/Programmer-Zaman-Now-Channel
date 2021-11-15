// 1.Membuat RegExp
{
    const regex1 = /[a]/
const regex2 = new RegExp("[a]")
const regex3 = new RegExp(/[a]/)
}

// 2. RegExp Instance Method
{
const name = `Usep Syaikal Arifin Usep Syaikal Arifin`
const regex = /Usep/

let result = regex.exec(name)
console.info(result)

let test = regex.test(name)
console.info(test)
}

// 3. RegExp Modifier
{
    const names = `Usep Syaikal Arifin\nusep syaikal arifin\nuSep SyaIkal arifin\nArifin Syaikal Usep`
    const regex1 = /usep/ig
    const regex2 = /Syaikal/ig
    let result
    while ((result = regex1.exec(names)) !== null){
        console.info(result)
    }
    while((result = regex2.exec(names)) !== null){
        console.info(result)
    }
}

// 4. Advanced regex
{
    const regex = /us[aiueo]/ig
    const name = `usep usup usap usip usop usdp usfu usdf usqp`
    let result
    while ((result = regex.exec(name)) !== null) {
        console.info(result)
    }
}

// 5. RegExp di String
{
const string = `usep ado usup adi usap adq usqp dsd uscp agh usip ady usop`
console.info(string.match(/us[aiueo]/ig))
console.info(string.search(/us[aiueo]/ig))
console.info(string.replace(/us[aiueo]/ig, `jagoan`))
console.info(string.replaceAll(/us[aiueo]/ig, `3`))
console.info(string)
console.info(string.split(/us[aiueo]/ig))
}
