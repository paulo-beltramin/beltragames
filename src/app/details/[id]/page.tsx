import { gamesApi } from "@/app/page"

import Container from "@/components/container"
import { GamesProps } from "@/interface"
import Link from "next/link"
import { redirect } from "next/navigation"
import { BsArrowRightSquare } from "react-icons/bs"

const getDetails = async (id: number) => {
    try {
        const res = await fetch(`${process.env.GAMES_URL_API}/next-api/?api=game&id=${id}`)
        return res.json()
    } catch (error) {
        throw new Error('failed to fetch data')
    }
}


const Details = async ({ params: { id } }: { params: { id: number } }) => {

    const data: GamesProps = await gamesApi()


    const detail: GamesProps = await getDetails(id)

    if (!detail) {

        return (
            redirect('/')
        )
    }
    return (
        <>
            <section className="px-2 lg:px-0">

                <div className="bg-black">
                    <img className="w-full h-80 object-cover opacity-75" src={detail.image_url} alt={detail.title} />
                </div>

                <Container>
                    <div>
                        <h2 className="text-2xl font-bold mt-10 mb-10">{detail.title}</h2>
                        <p className="text-base mb-10">
                            {detail.description}
                        </p>
                    </div>

                    <h2 className="mb-2 font-bold">
                        Plataformas disponíveis:
                    </h2>
                    <div >
                        <ul className="mb-10 flex gap-5 flex-wrap">

                            {detail.platforms.map(item => (
                                <li className=" bg-slate-200 p-2">
                                    {item}
                                </li>
                            ))}

                        </ul>
                    </div>

                    <h2 className="mb-2 font-bold">
                        Categorias:
                    </h2>
                    <ul className="mb-10 flex gap-5 flex-wrap">

                        {detail.categories.map(item => (
                            <li className=" bg-slate-200 p-2">
                                {item}
                            </li>
                        ))}

                    </ul>

                    <div>
                        <p className="font-bold mb-10">
                            Lançamento: {detail.release}
                        </p>
                    </div>

                </Container >


                <Container>

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