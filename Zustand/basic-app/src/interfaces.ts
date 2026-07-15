export interface countStore {
    count: number
    increment: () => void
    decrement: () => void
    reset: () => void
}

export interface Student {
    name: string
    age: number
    subjects: string[]
}

export interface StudentStore {
    student: Student
    students: Student[]
    setStudent: (field: Partial<Student>) => void
    addStudent: () => void
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
}



