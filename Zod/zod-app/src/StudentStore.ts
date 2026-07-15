import { create } from "zustand";
import type { MyError, Student, StudentStore } from "./interfaces";


export const useStudentStore = create<StudentStore>((set) => (
    {
        students: [],
        error: { message: '', success: false },
        addStudent: (student: Student) => set((state) => {
            const newStudents = [...state.students, student]
            return { students: newStudents }
        }),
        deleteStudent: (student: Student) => set((state) => {

            const newStudents = state.students.filter((curr) => curr != student)
            return { students: newStudents }
        }),
        setError: (myError: MyError) => set((state) => {
            const newError = { ...state.error, message: myError.message, success: myError.success }
            return { error: newError }
        })
    }
))