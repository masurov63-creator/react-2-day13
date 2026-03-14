import { Link, Outlet, } from 'react-router-dom'

const Layoute = () => {
    return (
        <div >
            <header className='p-2 w-[80%] m-auto shadow-lg z-10 bg-[#817a7a58] mt-[20px] px-[15px] rounded fixed ml-[150px]'>
                <div className='flex gap-[50px]'>

                    <Link to='/'>
                        <p className='p-1 rounded hover:shadow-[0px_0px_8px_0px_#817a7a58]'>Home</p>
                    </Link>
                    <Link to='/reduxtoolkit'>
                        <p className='p-1 rounded hover:shadow-[0px_0px_8px_0px_#817a7a58]'>
                            Redux Toolkit
                        </p>
                    </Link>
                    <Link to='/zustand'>
                        <p className='p-1 rounded hover:shadow-[0px_0px_8px_0px_#817a7a58]'>Zustand</p>
                    </Link>




                </div>
            </header>

            <main>
                <Outlet />
            </main>

            <footer className='bg-[#11a683] text-[#d0f3ea]'>
                <div className='flex justify-between items-center py-12 w-[80%] m-auto '>

                    <div>
                        <p>footer 🫤 footer footer 🫤 footer</p>
                        <p>footer 🫤 footer footer 🫤 footer</p>
                        <p>footer 🫤 footer footer 🫤 footer</p>
                        <p>footer 🫤 footer footer 🫤 footer</p>
                        <p>footer 🫤 footer footer 🫤 footer</p>
                    </div>
                    <div>
                        <p>footer 🫤 footer footer 🫤 footer</p>
                        <p>footer 🫤 footer footer 🫤 footer</p>
                        <p>footer 🫤 footer footer 🫤 footer</p>
                        <p>footer 🫤 footer footer 🫤 footer</p>
                        <p>footer 🫤 footer footer 🫤 footer</p>
                    </div>
                    <div>
                        <p>footer 🫤 footer footer 🫤 footer</p>
                        <p>footer 🫤 footer footer 🫤 footer</p>
                        <p>footer 🫤 footer footer 🫤 footer</p>
                        <p>footer 🫤 footer footer 🫤 footer</p>
                        <p>footer 🫤 footer footer 🫤 footer</p>
                    </div>
                    <div>
                        <p>footer 🫤 footer footer 🫤 footer</p>
                        <p>footer 🫤 footer footer 🫤 footer</p>
                        <p>footer 🫤 footer footer 🫤 footer</p>
                        <p>footer 🫤 footer footer 🫤 footer</p>
                        <p>footer 🫤 footer footer 🫤 footer</p>
                    </div>
                </div>
            </footer>
        </div >
    )
}

export default Layoute