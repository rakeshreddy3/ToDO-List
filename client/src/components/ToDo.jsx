import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'

const ToDo = ({text,updateMode,deleteToDo}) => {
  return (
    <div className="flex justify-between mt-5 bg-white py-1.5 px-3 rounded-md gap-5 ">
        <div className="pl-5 "> 
            {text}
        </div>
        <div className="flex gap-5 px-5 translate-y-1/4">
            <BiEdit className='cursor-pointer' onClick={updateMode}/>
            <AiFillDelete className='cursor-pointer' onClick={deleteToDo}/>
        </div>
    </div>
  )
};

export default ToDo;
