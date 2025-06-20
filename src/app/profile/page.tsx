import Container from '@/components/container'
import Link from 'next/link'
import React from 'react'

const Profile = () => {


    
    return (
        <>
            <section>
                <Container>
                    <div className='flex justify-between mt-10'>
                        <div >
                            <img src="" alt="" />
                            <p className='font-bold text-lg'>
                                Paulo beltramin
                            </p>
                        </div>

                        <div className='flex gap-3'>
                            <Link href={''} className='bg-slate-700 text-white
                             p-2 rounded-lg'>
                                Configurações
                            </Link>
                            <Link href={''} className='bg-slate-700 text-white
                             p-2 rounded-lg'>
                                teste
                            </Link>
                        </div>
                    </div>

                    <div>
                        <ul className='grid grid-cols-1 gap-5 mt-20 md:grid-cols-3 lg:grid-cols-3'>
                            <li className='bg-slate-800 text-white h-48 '>
                                <Link href={''} className='text-white font-bold flex p-2 text-3xl '>
                                   +
                                </Link>

                                <Link href={''} className='flex items-start p-2 mt-24'>
                                        Adicionar jogo  
                                </Link>
                            </li>

                              <li className='bg-slate-800 text-white h-48 '>
                                <Link href={''} className='text-white font-bold flex p-2 text-3xl '>
                                   +
                                </Link>

                                <Link href={''} className='flex items-start p-2 mt-24'>
                                        Adicionar jogo  
                                </Link>
                            </li>

                              <li className='bg-slate-800 text-white h-48 '>
                                <Link href={''} className='text-white font-bold flex p-2 text-3xl '>
                                   +
                                </Link>

                                <Link href={''} className='flex items-start p-2 mt-24'>
                                        Adicionar jogo  
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Profile