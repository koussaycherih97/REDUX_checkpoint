import React , {useState , useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {AddTodo,dltToDo,Done,Update} from "../redux/Actions";
import "./ToDo.css"




const ToDo = () => {
const [update,setUpdate]= useState(false)
const [id,setId]=useState('')
const [updatedTitle,setupdatedTitle]=useState('')
const tasks = useSelector((state) => state.Reducers);
const [filteredTasks, setFilteredTasks] = useState(tasks);
const toggle_update =(id, title)=>{
  setUpdate(!update)
  setId(id)
  setupdatedTitle(title)
}
const filterTasks = (filterType) => {
  if (filterType === 'done') {
    setFilteredTasks(tasks.filter((e) => e.isDone === true));
  } else if (filterType === 'Notdone') {
    setFilteredTasks(tasks.filter((e) => e.isDone === false));
  } else {
    setFilteredTasks(tasks);
  }
};
useEffect(() => {
  setFilteredTasks(tasks);
}, [tasks]);



  const [newTask, setNewTask]= useState ('') 
  /* const AddTask = useSelector(state=> state.Reducers) */
  const dispatch = useDispatch()

   return (
    <div className='box'>
        <h2>To Do List</h2>
            
            <div className='container'>
              <div className='section1'>
                <h2>FILTER</h2>
                <p onClick={()=>filterTasks('done')}>done</p>
                <p onClick={()=>filterTasks('Notdone')}>not done</p>
                <p onClick={()=>filterTasks('')}>all</p>
              </div>
                <div className='section2'>
                  <div className='box1'>
                                {update? <>
                                <input type="text" placeholder='update' onChange={(e) => setupdatedTitle(e.target.value)}></input>
                                <button onClick={()=> {dispatch(Update(id,updatedTitle));toggle_update()}}>UPDATE</button>
                                </> : <>
                                <input type="text" placeholder='new task' onChange={(e) => setNewTask(e.target.value)}></input>
                                <button onClick={()=> dispatch(AddTodo(newTask))}>Add</button>
                                </>}
                        </div>
                        <br></br>
                        <div className='box2'>
                                <ul> {filteredTasks.map(e => <div>
                  <li onClick={()=>dispatch(Done(e.id)) } className={`${e.isDone? "task":""}`}>{e.title}
                   </li> <button onClick={() => dispatch(dltToDo(e.id))}>Delete</button>
                   <button onClick={()=>toggle_update(e.id , e.title)}>Update</button>
                                </div>)}
                                
                                 </ul>
                        </div>
                </div>
            </div>

    </div>
  )
}

export default ToDo