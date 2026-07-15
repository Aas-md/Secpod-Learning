
import useStudent from "../studentStore"

export default function StudentForm() {

    let name = useStudent((state) => (state.student.name))
    let age = useStudent((state) => (state.student.age))
    let student = useStudent((state) => (state.student))
    let setStudent = useStudent((state) => (state.setStudent))
    let addStudent = useStudent((state) => (state.addStudent))

    let handleSubmit = (e: React.SyntheticEvent<HTMLElement>) => {
        e.preventDefault()
        setStudent({ ...student, subjects: ["Math", "physics"] })
        addStudent()
        setStudent({ ...student, name: "", age: 0 })
        // console.log(students)
    }

    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name : </label>
            <input type="text" id="name" value={name} onChange={(e) => setStudent({ name: e.target.value })} />
            <label htmlFor="age" >Age : </label>
            <input type="number" id="age" value={age === 0 ? "" : age} onChange={(e) => setStudent({ age: Number(e.target.value) })} />
            <button>Submit</button>
        </form>
    )
}