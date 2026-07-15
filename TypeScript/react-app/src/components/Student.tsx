import type { StudentProp } from "../types"

export default function Student({ name, age , subjects , isActive  = true } : StudentProp) {

    return (
        <>
            <h1>{name}</h1>
            <span>{age}</span>
            {isActive && <span>⭐</span> }
            <span>Subjects :</span>
            <ul>
                {subjects && subjects.map((curr,idx) => {
                    return <li key={idx}>{curr}</li>
                })}
            </ul>
        </>
    )
}