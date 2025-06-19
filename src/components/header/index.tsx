import Link from 'next/link'
import { FaRegUser } from "react-icons/fa";

const Header = () => {
    return (
        <div className='bg-[#F1F5F9]'>
            <header className='flex justify-between max-w-5xl mx-auto h-28 items-center w-11/12 lg:w-full'>
                <div className='flex items-center '>
                    <p className='text-2xl font-bold lg:text-3xl'>
                        Daly<span className='text-amber-600'>Games</span>
                    </p>

                    <ul className='flex pl-4 gap-6'>
                        <li className='text-base hover:text-blue-950'>
                            <Link href={'/'}>Jogos</Link>
                        </li>

                        <li className='text-base hover:text-blue-950'>
                            <Link href={'/profile'}>Perfil</Link>
                        </li>
                    </ul>
                </div>

                <div className='border rounded-full p-1 cursor-pointer hover:text-blue-950'>
                    <FaRegUser size={24} />
                </div>
            </header>
        </div>
    )
}

export default Header