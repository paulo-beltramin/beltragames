import Link from 'next/link'

const Header = () => {
    return (
        <div className='bg-[#F1F5F9]'>
            <header className='flex justify-between max-w-5xl mx-auto h-28 items-center w-11/12 lg:w-full'>
                <div className='flex items-center '>
                    <p className='text-2xl font-bold lg:text-3xl'>
                        Beltra<span className='text-amber-600'>Games</span>
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


            </header>
        </div>
    )
}

export default Header