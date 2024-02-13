import { createSlice } from "@reduxjs/toolkit"

const initialState={
    tasks:[]||null,
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
     reducers:{
        addTodo:(state,action)=>{
            console.log(action.payload)
            state.tasks.push({id:Date.now(),title:action.payload})
        },
        deleteTodo:(state,action) => {
            state.tasks=state.tasks.filter((task) => task.id !== action.payload)
        }
     },
})
export const {addTodo,deleteTodo}=todoSlice.actions
export default todoSlice.reducer