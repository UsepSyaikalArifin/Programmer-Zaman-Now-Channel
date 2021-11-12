class Configuration{
    static name = `Belajar JavaScript OOP`
    static version = 1.0
    static author = `Usep Syaikal Arifin`
}

const config = new Configuration()
console.info(config)

console.info(Configuration.name)
console.info(Configuration.version)
console.info(Configuration.author)

Configuration.author = `Eko Khannedy`
console.info(Configuration.author)