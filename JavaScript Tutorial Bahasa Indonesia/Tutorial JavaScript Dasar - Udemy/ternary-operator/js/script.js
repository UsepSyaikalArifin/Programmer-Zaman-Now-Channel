let nilai = 90
let ucapan

if(nilai > 80){
    console.info(`Selamat anda lulus`)
}else{
    console.info(`Silakan coba lagi`)
}


const ucapan2 = nilai > 80 ? `Selamat anda lulus` : `Silakan coba lagi`
console.info(ucapan2)