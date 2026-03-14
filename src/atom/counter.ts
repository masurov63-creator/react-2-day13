import { atom } from "jotai";


export const AtomData = atom([
    { id: 1, name: "Abu", age: 21 },
    { id: 2, name: "Abu", age: 21 },
    { id: 3, name: "Abu", age: 21 },
    { id: 4, name: "Abu", age: 21 },
    { id: 5, name: "Abu", age: 21 },
    { id: 6, name: "Abu", age: 21 },
    { id: 7, name: "Abu", age: 21 },
    { id: 8, name: "Abu", age: 21 },
    { id: 9, name: "Abu", age: 21 },
    { id: 11, name: "Abu", age: 21 },
    { id: 12, name: "Abu", age: 21 },
    { id: 13, name: "Abu", age: 21 },
    
])


export const Deletuser = atom(null, (get, set, id) => {
    set(
        AtomData,
        get(AtomData).filter((e) => e.id != id)
    )
})

