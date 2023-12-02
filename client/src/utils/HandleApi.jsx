import axios from "axios"

const baseUrl = "http://localhost:3002"

const getAllTodo = (setTodo) => {
    axios.get(baseUrl)
    .then(({data}) => {
        console.log('data ....',data);
        setTodo(data.todo)
    })
    .catch((err) => console.log("error from get todo",err))
}

const addToDo = (title, setText, setTodo) => {
    axios.post(`${baseUrl}/save`, {title})
    .then((data) => {
        console.log(data);
        setText("")
        getAllTodo(setTodo)
    })
    .catch((err) => console.log("error from add todo",err))
}

const updateToDo = (todoId, title, setText,setTodo,setIsUpdating) => {
    axios.put(`${baseUrl}/update`, {_id : todoId,title})
    .then((data) => {
        console.log(data);
        setText("")
        setIsUpdating(false)
        getAllTodo(setTodo)
    })
    .catch((err) => console.log("error from update todo",err))
}



const deleteToDo = (_id, setTodo) => {
    axios
    .post(`${baseUrl}/delete`, {_id})
    .then((data) => {
        console.log(data)
        getAllTodo(setTodo)
    })
    .catch((err) => console.log(err))
}

export {getAllTodo,addToDo,updateToDo,deleteToDo};