const masuk = confirm(`Apakah anda mau masuk ?`)

if(masuk){
    const nama = prompt(`Siapa nama anda ?`)
    document.writeln(`Hallo ${nama}`)
}else{
    alert(`Bye Bye`)
}