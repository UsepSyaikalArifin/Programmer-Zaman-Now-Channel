function register(nama, gender=`UNKNOW`) {
    console.log(nama)
    console.log(gender)
}

register()
register(`Usep`)
register(`Usep`, `Laki`)
register(`Usep`, undefined)
register(`Usep`, null)