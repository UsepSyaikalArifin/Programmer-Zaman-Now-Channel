const person = {
    firstName: `Usep Syaikal`,
    lastName: ` Arifin`,
    // 1.Getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    // 2.Setter
    set fullName(values) {
        const value = values.split(` `);
        this.firstName = value[0];
        this.lastName = value[1];
    },
};
document.writeln(`<p>${person.fullName}</p>`);
person.fullName = `Jacob Jackson`;
document.writeln(`<p>${person.firstName}</p>`);
document.writeln(`<p>${person.lastName}</p>`);
