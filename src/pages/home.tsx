import { useAtom } from 'jotai'
import { AtomData, Deletuser } from '../atom/counter'

const Home = () => {


  const [data] = useAtom(AtomData);
  const [, deletuser] = useAtom(Deletuser)
  return (
    <div className='pt-25   w-[100%] m-auto h-[75vh]  overflow-y-auto'>



      <table className='mb-[20px] w-[80%] m-auto text-center bg-[#558eae] rounded-[8px] text-white'>
        <thead>
          <tr className='border-b '>
            <th className='p-2'>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((e) => {
            return <tr className='border-b-1 bg-[#749eb7]' key={e.id}>
              <td className='p-3'>{e.id}</td>
              <td >{e.name}</td>
              <td >{e.age}</td>
              <td >
                <span onClick={() => deletuser(e.id)} className='hover:shadow-[0px_0px_10px_0px_#d1cece] rounded px-2 py-1  '>DeletUser</span>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home