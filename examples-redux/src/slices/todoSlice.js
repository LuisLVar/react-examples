import { createSlice } from "@reduxjs/toolkit"
import {todos} from '../shared/todos'

const todoSlice = createSlice({
    name: 'todos',
    initialState: todos,
    reducers: {
        crear(todos, action)  {
            todos = [...todos, action.todo]
        },
        eliminar(todos, action){

        },
        editar(todos, action){

        },
        checkear(todos, action){

        },
    },
  })

export const { crear, eliminar, editar, checkear } = todoSlice.actions

export default todoSlice.reducer