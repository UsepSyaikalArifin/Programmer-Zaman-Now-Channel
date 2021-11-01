const examValue = 90

// If saja
if(examValue > 80){
    document.writeln(`<p>Good Job </p>`)
}

// if else
if (examValue > 90){
    document.writeln(`<p>Good Job</p>`)
}else{
    document.writeln(`<p>Selamat Mecoba Kembali</p>`)
}

// if else if
if (examValue  > 80 ){
    document.writeln(`<p>Good Job A</p>`)
}else if(examValue > 70){
    document.writeln(`<p>Not Bad A</p>`)
}else if(examValue > 60){
    document.writeln(`<p>Not Bad B</p>`)
}else{
    document.writeln(`<p>Try Again Next Year</p>`)
}