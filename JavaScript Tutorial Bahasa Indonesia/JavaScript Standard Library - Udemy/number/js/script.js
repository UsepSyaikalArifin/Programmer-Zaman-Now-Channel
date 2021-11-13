// 1.
const input = `12345`
const number = Number(input)

console.info(typeof input)
console.info(typeof number)
console.info(number)

// 2. Number Static Property
console.info(Number.MIN_VALUE)
console.info(Number.MAX_VALUE)
console.info(Number.MIN_SAFE_INTEGER)
console.info(Number.MAX_SAFE_INTEGER)
console.info(Number.NaN)

// 3. Number Static Methods
const data = Number(`12345`)
console.info(Number.isInteger(data))
console.info(Number.isNaN(data))

// 4. Number Instance Method
const value = Number(12345)
console.info(value.toString(2))
console.info(value.toLocaleString(`id-ID`))
console.info(value.toLocaleString(`en-US`))