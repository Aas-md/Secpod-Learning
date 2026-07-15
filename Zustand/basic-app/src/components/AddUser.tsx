import { Skeleton } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";


interface User {
    name: string
    email: string
}

// let url = "https://jsonplaceholder.typicode.com/users"
let url = "https://6a4e44c2e785c9ef536c8dcd.mockapi.io/api/users"
let addUser = async (formData: User) => {

    let response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })

    if (!response.ok) throw new Error("Netork response was  not ok")
    return await response.json();
}

export default function AddUser() {
    const queryClient = useQueryClient();
    const [formData, setFormData] = useState({ name: '', email: '' })

    const mutation = useMutation({
        mutationFn: addUser,
        onSuccess: () => {
            console.log("User Added Successfully")
            queryClient.invalidateQueries({
                queryKey: ["users"]
            })
        },
    })

    let handleSubmit = (e: React.SyntheticEvent<HTMLElement>) => {
        e.preventDefault()
        mutation.mutate(formData)

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name : </label>
                <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <label htmlFor="email">Email : </label>
                <input type="text" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <button disabled={mutation.isPending}>
                    {mutation.isPending ? "Submitting..." : "Submit"}
                </button>
            </form>
            {mutation.isSuccess && <div>User Added Successfully</div>}
        </>
    )
}