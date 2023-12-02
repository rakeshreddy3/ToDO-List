import { useEffect, useState } from 'react';
import ToDo from './components/ToDo'
import {addToDo, getAllTodo, updateToDo, deleteToDo} from './utils/HandleApi'

function App() {
  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [todoId, setTodoId] = useState("")

   useEffect(() => {
      getAllTodo(setToDo)
   },[])

   const updateMode = (_id, text) => {
      setIsUpdating(true)
      setText(text)
      setTodoId(_id)
   }

  return (
    <div className=' bg-gray-400 w-screen h-full m-0'>
       <div className="container max-w-2xl m-auto bg-gray-400 p-10" >
          <h1 className=" px-4 py-4 text-center font-bold text-4xl text-white">
              TODO  LIST
          </h1>
          <div className="flex justify-center px-4 py-4 gap-5">
              <input type="text" 
                    placeholder="add your todo's...." 
                    className="text-center outline-none w-96 border-b-2 border-gray-400"
                    value={text}
                    onChange={(e) => setText(e.target.value)}/>

              <div className="bg-white px-4 cursor-pointer"
                    onClick={
                        isUpdating ?
                        () => updateToDo(todoId, text, setText, setToDo, setIsUpdating)
                        :  () => addToDo(text, setText, setToDo)
                    }>
                  {isUpdating ? "update" : "ADD"}
              </div>
          </div>

          <div>
                {toDo.map((item) => 
                  <ToDo         
                        key = {item._id}                
                        text = {item.title}
                        updateMode={() => 
                          updateMode(item._id, item.title)}
                        deleteToDo={() => 
                            deleteToDo(item._id, setToDo)} 
                  />)}
          </div> 
          
       </div>
       
    </div>
  );
}

export default App;
