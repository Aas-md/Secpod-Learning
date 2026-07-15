import { create } from "zustand";
import type { StudentStore, Student } from "./interfaces";


const useStudent = create<StudentStore>((set) => ({
    student: {
        name: "",
        age: 0,
        subjects: []
    },
    students: [],
    setStudent: (changedField: Partial<Student>) => set((state) => ({ student: { ...state.student, ...changedField } })),
    addStudent: () => set((state) => ({ students: [...state.students, state.student] }))

}))
export default useStudent