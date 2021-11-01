function outer() {
    function inner() {
        document.writeln(`<p>Inner</p>`);
    }
    inner();
    inner();
}

outer();
