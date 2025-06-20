import { Metadata } from 'next';
import Cards from '@/components/cards'
import Container from '@/components/container'
import Input from '@/components/search'
import { GamesProps } from '@/interface'
import { IoMdSad } from "react-icons/io";


export const metadata: Metadata = {
  title: "Item encontrado",

};

const getSearch = async (title: string) => {
  try {
    const res = await fetch(`${process.env.GAMES_URL_API}/next-api/?api=game&title=${title}`)
    return res.json()
  } catch (error) {
    throw new Error('Erro ao buscar dados')
  }
}

const Search = async ({ params }: { params: Promise<{ title: string }> }) => {

  const { title } = await params

  const data: GamesProps[] = await getSearch(title)

  return (
    <>
      <Container>
        <Input />

        {!data && (
          <div className='text-center w-full mt-10'>
            <p className='text-3xl font-bold text-black '>
              Item não encontrado ...
            </p>
            <p className='flex justify-center mt-5'>
              <IoMdSad size={150} color='red' />

            </p>
          </div>
        )}

        <div className='grid grid-cols-1 
          md:grid-cols-3 lg:grid-cols-4 gap-6 
          mt-10 mb-10 px-4 lg:px-0 '>


          {data && data.map(item => (
            <Cards key={item.id} data={item} />
          ))}

        </div>

      </Container>
    </>
  )
}

export default Search