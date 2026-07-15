import { useQuery } from "@tanstack/react-query";
import type { User } from "../interfaces";
import { Skeleton } from "@mui/material";

export default function Tanstack() {

    const fetchUsers = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        return res.json();
    };

    const { data, isLoading, error } = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
    });

    if (isLoading) return <Skeleton variant="text" />;

    if (error) return <h2>Error...</h2>;

    return (
        <>
            {data.map((user: User) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </>
    )
}