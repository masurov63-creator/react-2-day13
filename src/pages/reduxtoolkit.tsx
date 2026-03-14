import { useDispatch, useSelector } from "react-redux"
import { deletUser, addUser, editUser } from "../reduser/counter"
import { useFormik } from "formik"
import { useState } from "react"
import type { RootState } from "../store/store"

const Reduxtoolkit = () => {
    const [idx, setIdx] = useState(0)
    const dispatch = useDispatch()
    const { data } = useSelector((state: RootState) => state.counter)
    const { resetForm, handleSubmit, values, handleChange, setFieldValue } = useFormik({
        initialValues: {
            name: '',
            age: 0,
            status: false
        },

        onSubmit: (value) => {
            if (!idx) {

                dispatch(addUser(
                    {
                        id: Date.now(),
                        name: value.name,
                        age: value.age,
                        status: false,
                    }
                ))
                resetForm()
            }

            else {
                dispatch(editUser(
                    {
                        name: value.name,
                        age: value.age,
                        id: idx
                    }

                ))
                resetForm()
                setIdx(0)
            }
        }
    })


    function hendlEdit(user: { name: string, age: number, id: number }) {
        setFieldValue('name', user.name)
        setFieldValue('age', user.age)
        setIdx(user.id)
    }


    return (
        <div className="pt-25 w-[80%] m-auto h-[75vh]  overflow-y-auto">
            <form onSubmit={handleSubmit} className="border w-fit bg-[#a9e5d4] rounded text-white p-3">
                <input type="text" name="name" value={values.name} onChange={handleChange} className="rounded border m-3 p-2" />
                <input type="number" name="age" value={values.age} onChange={handleChange} className="rounded border m-3 p-2" />
                <button type="submit">Save</button>
            </form>


            <div >

                <table className=" text-center  w-[100%] m-auto bg-amber-50 mt-[40px] rounded-2xl">
                    <thead>
                        <tr className=" border-b">
                            <th className="p-3">Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((e: { id: number, name: string, age: number, status: boolean }) => {
                            return <tr key={e.id} className=" border-b">
                                <td className="p-3">{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.age}</td>
                                <td>{e.status ? 'true' : 'false'}</td>
                                <td>
                                    <span onClick={() => dispatch(deletUser(e.id))} className="hover:text-red-500 p-3" >Delet User</span>
                                    <span onClick={() => hendlEdit(e)} className="hover:text-red-500 p-3" >Edit User</span>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Reduxtoolkit