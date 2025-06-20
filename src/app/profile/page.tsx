import { Metadata } from 'next';
import Link from 'next/link'
import React from 'react'
import Container from '@/components/container'
import image from '@/components/images/image.png'
import Favorites from '@/components/favorites';

export const metadata: Metadata = {
    title: "Meu perfil",

};

const Profile = () => {



    return (
        <>
            <section className='relative'>
                <Container>
                    <div className='flex flex-col lg:justify-between lg:flex-row justify-center items-center mt-10'>
                        <div className='flex flex-col lg:flex lg:flex-row items-center gap-4'>
                            <img src={image.src} alt=""
                                className='w-56 object-cover h-56 rounded-full ' />
                            <p className='font-bold text-2xl mb-7 text-center'>
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

                    <div className='p-2 mb-7 grid grid-cols-1 md:grid-cols-3 gap-5 mt-7'>
                       <Favorites/>
                       <Favorites/>
                       <Favorites/>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Profile