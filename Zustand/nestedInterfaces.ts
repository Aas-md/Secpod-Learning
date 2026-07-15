// interface Person {
//     name: string
//     age: number
// }
// interface Car {
//     brand: string
//     price: number
// }

// const person: Person = {
//     name: "Aas Mohammad",
//     age: 20
// }

// const car: Car = {
//     brand: "Aas Mohammad",
//     price: 20
// }

// interface Address {
//     city: string
//     state: string
//     country: string
// }

// interface Student {
//     person: Person
//     address: Address
// }
// let student: Student = {
//     person: {
//         name: "Aas MOhammad",
//         age: 25,
//     },
//     address: {
//         city: "Rampur",
//         state: "UP",
//         country: "India",
//     }
// }



// console.log(student)

// IS-A Relationship

// interface Person {
//     name: string
//     age: number
// }

// interface Student extends Person {

//     rollNo: number
//     course: string
// }

// interface Teacher extends Person {
//     subject: string
//     salary: number
// }

// let student: Student = {
//     name: "Person A",
//     age: 20,
//     rollNo: 100,
//     course: "B tech (CSE)"
// }

// let teacher: Teacher = {

//     name: "Person B",
//     age: 34,
//     salary: 1000,
//     subject: "Math"
// }

// console.log(student, teacher)

//Company management system



// interface Address {
//     city: string
//     state: string
//     country: string
// }

// interface Person {
//     name: string
//     age: number
//     address: Address
// }

// interface Employee extends Person {
//     empId: number
//     salary: number
// }
// interface Manager extends Employee {
//     teamSize: number
// }

// let person: Person = {
//     name: "Aas Mohammad",
//     age: 25,
//     address: {
//         city: "Rampur",
//         state: "UP",
//         country: "india"
//     }
// }

// let employee: Employee = {
//     empId: 100,
//     salary: 2000,
//     name: "employee jabbar",
//     age: 25,
//     address: {
//         city: "Rampur",
//         state: "UP",
//         country: "india"
//     }
// }

// let manager: Manager = {
//     empId: 200,
//     salary: 5000,
//     name: " jabbar manager",
//     age: 25,
//     address: {
//         city: "Rampur",
//         state: "UP",
//         country: "india"
//     },
//     teamSize: 12
// }

// console.log(person, employee, manager)


// E commerce system 

interface Address {
    city: string
    state: string
    country: string
}

interface Person {
    name: string,
    address: Address
}

interface Order {
    itemName: string
}

interface Customer extends Person {
    orders: Order[]
}

interface Product {
    productCategory: string
}

interface Seller extends Person {
    products: Product[]
}

let person: Person = {
    name: "Aas Mohammad",
    address: {
        city: "Rampur",
        state: "UP",
        country: "india"
    }
}
let order: Order = {
    itemName: "macbook Pro"
}

let customer: Customer = {
    name: "Jabbar customer hahaha",
    address: {
        city: "Rampur",
        state: "UP",
        country: "india"
    },
    orders: [{ itemName: "I phone 15" }, { itemName: "veg Biryani" }]
}

let product: Product = {
    productCategory: "Luxury"
}

let seller: Seller = {

    name: "Jabbar Seller",
    address: {
        city: "Rampur",
        state: "UP",
        country: "india"
    },
    products: [{ productCategory: "Luxury" }, { productCategory: "foody" }]
}

console.log(product, order, seller, customer)







