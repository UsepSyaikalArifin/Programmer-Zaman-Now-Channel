document.getElementById("sayButton").onclick = function(){
    import("./alert.js").then(module => {
        const name = document.getElementById(`name`).value
        module.alertHello(name)
    }) ;
}