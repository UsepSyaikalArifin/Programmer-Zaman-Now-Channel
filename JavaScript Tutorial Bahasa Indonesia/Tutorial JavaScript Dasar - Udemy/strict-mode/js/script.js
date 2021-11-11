function useStrictMode(){
    "use strict"
    const person = {
        firstName : `Usep`
    }
    with(person){
        console.info(firstName)
    }
}

useStrictMode()