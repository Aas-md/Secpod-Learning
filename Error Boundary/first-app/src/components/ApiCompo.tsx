import { useEffect, useState } from "react"
import ErrorBoundaryWrapper from "./ErrorFallback"

interface Data {
    title: string
    id: number
}


export default function ApiCompo() {
    let [data, setData] = useState<Data>({ title: '', id: 0 })
    let [error, setError] = useState<Error | null>(null)

    let fetchData = async () => {

        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/todos/2")
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status} `);
            }
            let result = await response.json()

            setData(result)
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : String(err);
            setError(new Error(errorMessage));
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (error) throw error
    return (
        <>
            <h1>Working fine Api compo..</h1>
            <h1>{data.title}</h1>
            <h1>{data.id}</h1>

        </>
    )
}