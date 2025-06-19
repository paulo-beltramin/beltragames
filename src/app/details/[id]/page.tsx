import { gamesApi } from "@/app/page"

import Container from "@/components/container"
import { GamesProps } from "@/interface"
import Link from "next/link"
import { BsArrowRightSquare } from "react-icons/bs"


const Details = async () => {

    const data: GamesProps = await gamesApi()
    return (
        <>
            <section className="px-2 lg:px-0">
                <img src='' alt='' />

                <Container>
                    <div>
                        <h2 className="text-2xl font-bold mt-10 mb-10">titulo</h2>
                        <p className="text-base mb-10">
                            The Last of Us Part II é um jogo de ação e aventura pós-apocalíptico
                            desenvolvido pela Naughty Dog. Nele, os jogadores controlam Ellie,
                            uma jovem sobrevivente, em sua jornada para buscar vingança em um
                            mundo devastado por uma pandemia. Com uma narrativa emocionante,
                            personagens complexos e uma jogabilidade refinada,
                            The Last of Us Part II é uma experiência emocionante e envolvente.
                        </p>
                    </div>

                    <h2 className="mb-2 font-bold">
                        Plataformas disponíveis:
                    </h2>
                    <div className="flex gap-x-5 items-center">
                        <div className="bg-slate-200 rounded-lg mb-10">
                            <p className="px-5 py-1 font-bold">
                                playstation
                            </p>
                        </div>
                    </div>



                    <h2 className="mb-2 font-bold">
                        Categorias:
                    </h2>
                    <div className="flex gap-x-5 items-center">
                        <div className="bg-slate-200 rounded-lg mb-10">
                            <p className="px-5 py-1 font-bold">
                                Ação
                            </p>
                        </div>
                    </div>



                    <div>
                        <p className="font-bold mb-10">
                            Lançamento: 19/06/2020
                        </p>
                    </div>
                    <div>

                        <h2 className="text-2xl lg:text-3xl px-2 mb-7 font-bold">
                            Outros jogos que recomendamos:
                        </h2>
                        <section className='bg-black w-full rounded-lg mb-12'>
                            <Link href={`/details/${data.id}`} className='h-80'>
                                <div className='absolute flex gap-2 p-2 items-center'>
                                    <p className='z-20 text-white text-2xl
            pl-2'>{data.title}</p>
                                    <BsArrowRightSquare size={24} color='white' />

                                </div>

                                <img src={data.image_url} alt={data.title}
                                    className='w-full h-80  rounded-lg opacity-40 relative ' />
                            </Link>
                        </section>


                    </div>
                </Container>
            </section>
        </>
    )
}

export default Details