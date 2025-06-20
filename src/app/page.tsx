import { BsArrowRightSquare } from 'react-icons/bs'
import Link from 'next/link'
import Cards from '@/components/cards'
import Container from '@/components/container'
import Input from '@/components/search'
import { GamesProps } from '@/interface'


export const gamesApi = async () => {
  try {
    const response = await fetch(`${process.env.GAMES_URL_API}/next-api/?api=game_day`)
    return response.json()
  } catch (error) {
    throw new Error('Erro na requisição')
  }
}

const gamesCard = async () => {
  try {
    const response = await fetch(`${process.env.GAMES_URL_API}/next-api/?api=games`)
    return response.json()
  } catch (error) {
    throw new Error('Erro na requisição')
  }
}


export default async function Home() {

  const data: GamesProps = await gamesApi()
  const card: GamesProps[] = await gamesCard()


  return (
    <div className="mt-10">
      <Container>
        <h1 className='text-2xl px-2 lg:text-3xl lg:px-0  font-bold text-center mb-10'>Separamos um jogo exclusivo pra você</h1>
        <section className='bg-black w-full rounded-lg'>
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

        <div>
          <Input />
        </div>

        <section>
          <h2 className='text-2xl lg:text-3xl font-bold pl-2 lg:p-0'>Jogos para conhecer</h2>
          <div
            className='grid grid-cols-1 
          md:grid-cols-3 lg:grid-cols-4 gap-6 
          mt-10 mb-10 px-4 lg:px-0 '>
            {card.map((item) => (
              <Cards key={item.id} data={item}
              />
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
