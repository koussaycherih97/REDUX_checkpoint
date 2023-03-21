import { ADD , DLT, DONE , UPDATE} from "./TypeActions"; 
import { v4 as uuidv4 } from 'uuid';

const Add =[]
const Reducers = (state= Add , action) => {
    switch (action.type) {
      case ADD :
        return [...state , {id:uuidv4() ,title:action.payload , isDone:false}] // return the updated state based on the action payload
      case DLT :
        return state.filter((e)=> e.id !== action.payload)
      case DONE : 
        return state.map(e=>{if (e.id===action.payload){return {...e, isDone: !e.isDone}}
      else return e })
      case UPDATE :
        return state.map((e)=> {if (e.id === action.payload.id){
          return {...e , title:action.payload.newTitle}
        }
      else return e})
      
        default:
        return state;
    }
  };
  
  export default Reducers;  
  
  
  
  
  