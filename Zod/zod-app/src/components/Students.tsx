import { Button } from "@mui/material";
import { useStudentStore } from "../StudentStore";


export default function Students() {
    const students = useStudentStore((state) => state.students)
    const deleteStudent = useStudentStore((state) => state.deleteStudent)
    return (
        <>

            {students?.map((student, idx) => (
                <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                    padding: '12px 16px',
                    margin: '8px 0',
                    backgroundColor: '#f8fafc',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}>
                    <span style={{ fontWeight: '600', color: '#1e293b', minWidth: '120px' }}>Name : {student.name}</span>
                    <span style={{ color: '#2563eb', backgroundColor: '#eff6ff', padding: '2px 8px', borderRadius: '4px', fontSize: '14px' }}>Age : {student.age} Yrs</span>
                    <span style={{ color: '#64748b', fontStyle: 'italic', fontSize: '14px' }}>Profession :  <b>{student.profession}</b></span>
                    <Button variant="contained" onClick={() => deleteStudent(student)}>Delete</Button>
                </div>

            ))}
        </>
    )
}