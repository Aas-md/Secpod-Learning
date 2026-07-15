import { useMutation } from "@tanstack/react-query"

// let url = "https://jsonplaceholder.typicode.com/users"
let url = "https://6a4e44c2e785c9ef536c8dcd.mockapi.io/api/users"

let deleteUser = async (userId: number) => {

    let response = await fetch(`${url}/${userId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (!response.ok) throw new Error("Something went wrong")
    return response.json()

}

export default function DeleteUser() {

    let mutation = useMutation({
        mutationFn: deleteUser,
        onSuccess: (data) => {
            console.log("User delete successfull", data)
        }
    })

    let handleDelete = (idx: number) => {
        mutation.mutate(idx)
    }

    return (
        <>
            <h1>All Users : </h1>
            {Array.from({ length: 10 }).map((_, i) => (
                <div key={i}>
                    <span >User {i}</span>
                    &nbsp;
                    &nbsp;
                    <button onClick={() => handleDelete(i)} disabled={mutation.isPending}>{mutation.isPending ? "Deleting..." : "DeleteUser"}</button>
                </div>
            ))}
        </>
    )
}