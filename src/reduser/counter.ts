import { createSlice } from '@reduxjs/toolkit'


export interface IData {
    id: number,
    name: string,
    age: number,
    status: boolean
}

export interface CounterState {
    data: IData[]
}

const initialState: CounterState = {
    data: [
        { id: 1, name: "Abu", age: 21, status: false },
        { id: 2, name: "Jey Jey", age: 22, status: true },
    ]
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        deletUser: (state, { payload: id }) => {
            state.data = state.data.filter((e) => e.id != id)
        },
        addUser: (state, { payload }) => {
            state.data = ([...state.data, { ...payload }])
        },
        editUser: (state, { payload }) => {
            state.data = state.data.map((e) => e.id == payload.id ? payload : e)
        }
    }
})

export const { deletUser, addUser, editUser } = counterSlice.actions

export default counterSlice.reducer