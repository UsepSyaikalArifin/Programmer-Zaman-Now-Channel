function useStrictMode() {
    "use strict";
    const person = {
        firstName: `Usep Syaikal Arifin`,
    };
    with (person) {
        document.writeln(`<p>${firstName}</p>`);
    }
}
useStrictMode();
