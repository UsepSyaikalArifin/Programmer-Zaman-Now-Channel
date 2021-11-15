import sayHelloMjs from "./say-hello.mjs";
import defaultVariable from "./default-variable.mjs"
import defaultClass from "./default-class.mjs"
import authorDefault, {title, content} from "./default-and-name.mjs"


sayHelloMjs(`Usep`)
console.info(defaultVariable)

const usep = new defaultClass(`Jagoan`)
usep.sayHi(`Pecundang`)

console.info(authorDefault)
console.info(title)
console.info(content)