import { perusahaan, total, Perusahaan } from "./alias_export.mjs";
import {company as perusahaan2, sum as total2, Company as Perusahaan2} from "./alias_import.mjs"

console.info(perusahaan)
console.info(total(1,2))
const a = new Perusahaan()
console.info(a)

console.info(perusahaan2)
console.info(total2(2,2))
const b = new Perusahaan2()
console.info(b)