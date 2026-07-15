import axios, { type AxiosResponse } from 'axios';

interface Todo {
    userId : number
    id : number
    title : string
    completed : boolean
}

let fetchData = async ()=>{
    try{
        let response : AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
        console.log(response.data)
    }catch(err : any){
        console.log(err.message)
    }
}

fetchData()

// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }