class Employee{

}

class Manager extends Employee{

}

const usep = new Employee()
const jacob = new Manager()

console.info(usep instanceof Employee)
console.info(usep instanceof Manager)
console.info(jacob instanceof Employee)
console.info(jacob instanceof Manager)