let counter = 1
while(true){
    document.writeln(`<p>Pengulangan ke - ${counter}</p>`)
    counter++

    if(counter === 10){
        break
    }
}

for( let i = 1; i <= 100; i++){
    if(i % 2 === 1){
        continue
    }
    document.writeln(`<p>Pengulangan Ke - ${i}</p>`)
}