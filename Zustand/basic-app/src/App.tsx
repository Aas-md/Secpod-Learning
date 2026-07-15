import { Suspense } from 'react'
import './App.css'
import Fallback from './components/Fallback'
import Student from './components/Student'
import StudentForm from './components/StudentForm'
import Tanstack from './components/Tanstack'
import GetUser from './components/GetUser'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import DeleteUser from './components/DeleteUser'

function App() {



  return (
    <>
      <AddUser />
      <GetUser/>
    </>
  )
}

export default App
