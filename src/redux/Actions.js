import {ADD, DLT, DONE, UPDATE} from "./TypeActions";


export const AddTodo = (task)=> {
    return {
        type :ADD ,
        payload : task
    }
}
export const dltToDo = (todo)=> {
    return {
        type : DLT ,
        payload : todo
    }
}
export const Done = (id)=> {
    return{
        type : DONE ,
        payload : id 
    }
}
export const Update = ( id, newTitle) => {
    return {
        type : UPDATE ,
        payload : {id , newTitle}
    }
}