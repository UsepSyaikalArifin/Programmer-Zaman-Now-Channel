// 1. encode URI 
{
const url = `http://www.contoh.com/?name=Usep Syaikal Arifin`
console.info(url)

const encode = encodeURI(url)
console.info(encode)

const decode = decodeURI(encode)
console.info(decode)
}

// 2. encode URI Component
{
    const value = `Usep&Syaikal=Arifin`
    const url = `http://www.contoh.com/?name=`
    console.info(url + value)

    const encoded = encodeURIComponent(value)
    console.info(url + encoded)

    const decoded = decodeURIComponent(encoded)
    console.info(url + decoded)
}