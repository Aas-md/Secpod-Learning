import React, { useState } from "react"
import type { FormProp } from "../types"

interface FormProps {
    onAddStudent: (student: FormProp) => void
}

export default function Form({ onAddStudent }: FormProps) {

    let [name, setName] = useState<string>("")
    let [age, setAge] = useState<number>(0)


    let handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        onAddStudent({ name, age })
        setName('')
        setAge(0)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            &nbsp;
            <input type="text" placeholder="enter your name" id="name" value={name} onChange={((e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value))} />
            &nbsp;
            <label htmlFor="age">Age</label>
            &nbsp;
            <input type="text" placeholder="enter your age" id="age" value={age} onChange={((e: React.ChangeEvent<HTMLInputElement>) => setAge(Number(e.target.value) || 0))} />
            &nbsp;
            <button type="submit">Submit</button>

        </form>
    )
}