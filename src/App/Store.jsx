import {configureStore} from '@reduxjs/toolkit'
import todoReducere from '../Component/SliceTodo/todoSlice'
export const Store = configureStore({
    reducer:{todos:todoReducere}
})
export default Store;