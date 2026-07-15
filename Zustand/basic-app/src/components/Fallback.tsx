import { Skeleton } from "@mui/material"
import { useEffect, useState } from "react"


export default function Fallback() {
    let [data, setData] = useState("")
    let fetchData = async () => {
        setTimeout(() => setData("This is the data"), 1000)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            {data && data.length > 0 ? <h1>{data}</h1>
                : <Skeleton variant="text" />}
        </>
    )
}