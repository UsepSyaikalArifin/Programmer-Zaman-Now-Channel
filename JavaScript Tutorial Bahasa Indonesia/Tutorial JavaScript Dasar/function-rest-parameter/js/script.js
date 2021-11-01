function sum(name, ...data) {
    let total = 0;
    for (const item of data) {
        total += item;
    }
    console.info(`Total ${name} is ${total}`);
}

sum(`Orange`, 2, 3, 4, 6, 7, 8);
sum(`Apple`, 5, 5, 6, 7, 5, 6);
sum(`Banana`, 9, 5, 2, 3, 4);

// Spread Operator
sum(`Orange`, ...[2, 3, 4, 6, 7, 8]);
sum(`Apple`, ...[5, 5, 6, 7, 5, 6]);
sum(`Banana`, ...[9, 5, 2, 3, 4]);
const values = [10, 10, 10, 10, 10];
sum(`Mango`, values);
