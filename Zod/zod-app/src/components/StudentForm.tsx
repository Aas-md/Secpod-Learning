import { useForm } from "react-hook-form"
import type { Student } from "../interfaces"
import { useStudentStore } from "../StudentStore"
import { StudentSchema } from "../zodSchema"
import * as z from "zod";
import { Alert, Snackbar } from "@mui/material";
import React, { type SyntheticEvent } from "react";

export default function StudentForm() {

    const { register, handleSubmit, reset } = useForm<Student>()

    const addStudent = useStudentStore((state) => state.addStudent)
    const setError = useStudentStore((state) => state.setError)
    const myError = useStudentStore((state) => state.error)

    let onSubmit = (data: Student) => {
        try {
            StudentSchema.parse(data)
            addStudent(data)
            setError({ message: '', success: false })
            reset()
        } catch (err) {
            if (err instanceof z.ZodError)
                setError({ message: err.issues[0].message, success: true })
        }
    }
    const handleClose = (event: SyntheticEvent | Event, reason: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setError({ ...myError, success: false });
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" {...register("name")} />
                &nbsp;
                <label htmlFor="age">Age</label>
                <input type="text" id="age" {...register("age", { valueAsNumber: true })} />
                &nbsp;
                <label htmlFor="profession">Profession</label>
                <input type="text" id="profession"  {...register("profession")} />
                &nbsp;
                <button>Submit</button>
            </form>
            <Snackbar
                open={myError.success}
                autoHideDuration={2000}
                message={myError.message}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>

                <Alert severity="error">
                    {myError.message}
                </Alert>
            </Snackbar >


        </>
    )
}