import { useMutation } from "@tanstack/react-query"
import { useEffect, useState } from "react"

interface User {
    name: string
    email: string
    id: number
}

// let url = "https://jsonplaceholder.typicode.com/users"
let url = "https://6a4e44c2e785c9ef536c8dcd.mockapi.io/api/users"
let updateUser = async (user: User) => {

    let response = await fetch(`${url}/${user.id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    })
    if (!response.ok) throw new Error("Some thing went wrong Please try agains")
    return response.json()
}

export default function EditUser() {

    const [formData, setFormData] = useState({ name: '', email: '', id: 1 })

    let mutation = useMutation({
        mutationFn: updateUser,
        onSuccess: (data) => {
            console.log("User updated successfuly", data)
        }
    })

    let handleSubmit = (e: React.SyntheticEvent<HTMLElement>) => {

        e.preventDefault()
        mutation.mutate(formData)


    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name : </label>
            <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            <label htmlFor="email">Email : </label>
            <input type="text" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <button disabled={mutation.isPending}>
                {mutation.isPending ? "Submitting..." : "Submit"}
            </button>
        </form>
    )
}