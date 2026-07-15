import { Skeleton } from "@mui/material"
import { useQuery } from "@tanstack/react-query"


// let url = "https://jsonplaceholder.typicode.com/users"
let url = "https://6a4e44c2e785c9ef536c8dcd.mockapi.io/api/users"
let fetchUser = async () => {

    let response = await fetch(url)
    return response.json()
}

interface User {
    id: number
    name: string
    email: string
    phone: string
}

export default function GetUser() {

    let { data, isLoading, error } = useQuery<User[]>(
        {
            queryKey: ["users"],
            queryFn: fetchUser,
        }
    )

    if (isLoading) return <Skeleton variant="text" />
    if (error) return <h1>Error!!</h1>



    return (
        <>
            {data?.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <span>{user.email}</span>
                    &nbsp;
                    &nbsp;
                    <span>{user.phone}</span>
                </div>
            ))}
        </>
    )
}