import { useState } from 'react'
import { useTodo } from '../stores/todo';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
const Zustand = () => {
    const [idx, setIdx] = useState(0)

    const { data, deleteUser, addUser, editUser } = useTodo()

    const { handleSubmit, values, handleChange, resetForm, setFieldValue } = useFormik({
        initialValues: {
            name: "",
            age: 0
        },
        onSubmit: (values) => {
            if (idx) {
                editUser({ id: idx, ...values, status: false })
            }
            else {
                addUser({
                    id: Date.now(),
                    name: values.name,
                    age: Number(values.age),
                    status: false,
                })
            }
            resetForm()
            setIdx(0)
        }
    })

    // function infoId(id) {

    // }


    const handleEdit = (e: { id: number, name: string, age: number, status: boolean }) => {
        setIdx(e.id)
        setFieldValue("name", e.name)
        setFieldValue("age", e.age)
    }

    return (
        <>

            <div  className='pt-25   w-[80%] m-auto   overflow-y-auto '>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder='name'
                            name='name'
                            value={values.name}
                            onChange={handleChange}
                            className='border-2 border-black rounded p-3'
                        />
                        <input
                            type="number"
                            placeholder='age'
                            name='age'
                            value={values.age}
                            onChange={handleChange}
                            className='border-2 border-black rounded p-3'
                        />
                        <button type='submit' className='w-[150px]  border ml-[25px] p-3 rounded text-white bg-green-400 hover:text-green-400 hover:bg-white transition-all '>Add</button>
                    </form>
                </div>

            </div>

            <table className='w-[80%] m-auto mt-5 bg-white shadow-lg rounded-2xl  overflow-hidden text-center mb-[60px]'>
                <thead className='bg-amber-800 h-10 text-white '>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>


                <tbody className=' text-gray-500 text-[20px]'>
                    {data.map((e) => (
                        <tr key={e.id}>
                            <td className='p-3'>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                            <td className={`${e.status ? 'text-green-400' : 'text-red-400'}`}>{e.status ? "Activ" : "Inactiv"}</td>
                            <td>
                                <span onClick={() => { deleteUser(e.id) }} className='p-3 hover:text-red-500  font-bold'>Delet User</span>
                                <span onClick={() => { handleEdit(e) }} className='p-3 hover:text-green-500  font-bold'>Edit User</span>
                                <Link to={`/info/${e.id}`}>

                                    <p>info</p>
                                </Link >
                                {/* <Switch checked={e.status} onChange={() => checkUser(e.id)} {...label} defaultChecked /> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Zustand