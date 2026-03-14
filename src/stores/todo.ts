import { create } from 'zustand'

interface IData {
    id: number
    age: number
    name: string
    status: boolean
}

interface IStore {
    data: IData[]
    deleteUser: (id: number) => void
    addUser: (user: IData) => void
    checkUser: (id: number) => void
    editUser: (users: IData) => void
}

export const useTodo = create<IStore>((set) => ({
    data: [
        { id: 1, age: 22, name: "Abu", status: true },
        { id: 2, age: 21, name: "AbuAli Jeyjey", status: false },
    ],
    deleteUser: (id: number) =>
        set((state) => ({
            data: state.data.filter((e) => e.id != id)
        })),
    addUser: (user: IData) =>
        set((state) => ({
            data: [...state.data, user]
        })),
    checkUser: (id: number) =>
        set((state) => ({
            data: state.data.map((e) =>
                e.id === id ? { ...e, status: !e.status } : e
            )
        })),
    editUser: (users: IData) =>
        set((state) => ({
            data: state.data.map((e) =>
                e.id == users.id ? users : e
            )
        })),
}))