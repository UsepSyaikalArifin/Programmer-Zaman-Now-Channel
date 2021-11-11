// Global Scope
let counter = 0

function hitMe() {
    document.writeln(`<p>${counter}</p>`)
    counter++
}
hitMe()
hitMe()
hitMe()
hitMe()

function other() {
    hitMe()
}
other()
other()
other()
other()

// Local Scope
function first() {
    // Local Scope first
    let firstVariable = `First`
}
function second() {
    // Local Scope second
    let secondVariable = `Second`
}
first()
second()

// Nested function Scope
function firstnested() {
    let firstVariable = `First`
    function secondnested() {
        document.writeln(`<p>${firstVariable}</p>`)
        let secondVariable = `second`
    }
    secondnested()
}
firstnested()
