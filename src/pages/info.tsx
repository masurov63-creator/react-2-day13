// Info.tsx
import { useParams } from 'react-router-dom';
import { useTodo } from '../stores/todo';


const Info = () => {
    const { id } = useParams();
    const { data } = useTodo();


    const user = data.find((u) => u.id === Number(id));
    return (
        <div className='pt-25   w-[40%]  m-auto h-[75vh]  overflow-y-auto '>
            <p><b>Name : </b> {user?.name}</p>
            <p><b>age :</b> {user?.age}</p>
            <p className={`${user?.status ? 'text - bg-green-500' : 'text-red-500'} w-fit`}> <b>Status :</b> {user?.status ? 'activ' : 'inactiv'}</p>

        </div>
    );
};

export default Info;