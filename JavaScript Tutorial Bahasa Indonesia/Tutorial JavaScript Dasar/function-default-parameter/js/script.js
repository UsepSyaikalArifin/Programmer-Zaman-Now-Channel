function register(name, gender=`Unknown`){
    document.writeln(`<p>${name}</p>`)
    document.writeln(`<p>${gender}</p>`)
}

register()
register(`Eko`, `Male`)
register(`Budi`)
register(`Joko`, undefined)
register(`Joko`, null)