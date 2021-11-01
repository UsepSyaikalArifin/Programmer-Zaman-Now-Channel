let counter = 1
while (true){
    document.writeln(`<p>Pegulangan ke - ${counter}`)
    counter++

    if(counter > 10){
        break
    }
}

for (let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        continue
    }

    document.writeln(`<p>Pengulangan ke - ${i}</p>`)
}