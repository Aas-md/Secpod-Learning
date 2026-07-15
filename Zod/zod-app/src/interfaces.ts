export interface Student {
    name: String
    age: number
    profession: string
}

export interface MyError {
    message: string
    success: boolean
}

export interface StudentStore {
    students: Student[]
    error: MyError
    addStudent: (student: Student) => void
    deleteStudent: (student: Student) => void
    setError: (error: MyError) => void
}