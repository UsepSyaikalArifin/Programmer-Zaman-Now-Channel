const nilai = "A"

switch (nilai){
    case "A":
        console.info(`Wow anda lulus dengan baik`)
        break
    case "B":
    case "C":
        console.info(`Anda lulus`)
        break
    case "D":
        console.info(`Anda tidak lulus`)
        break
    default:
        console.info(`Mungkin anda salah jurusan`)
}
