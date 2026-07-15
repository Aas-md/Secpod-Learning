import useStudent from "../studentStore"

export default function Student() {

    let students = useStudent((state) => (state.students))
    console.log(students)
    return (
        <>
            {students && students.map((student, idx) => (
                <div key={idx}>
                    <h1>Name : {student.name}</h1>
                    <span>Age : {student.age}</span>
                    <br /> 
                    {student.subjects && student.subjects.map((sub, idx) => (
                        <span key={idx}>{sub} &nbsp; &nbsp;</span>
                       
                    ))}
                </div>
            ))}
        </>
    )
}