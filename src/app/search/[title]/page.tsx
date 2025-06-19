import Cards from '@/components/cards'
import Container from '@/components/container'
import Input from '@/components/search'
import { GamesProps } from '@/interface'

const getSearch = async (title: string) => {
  try {
    const res = await fetch(`${process.env.GAMES_URL_API}/next-api/?api=game&title=${title}`)
    return res.json()
  } catch (error) {
    throw new Error('Erro ao buscar dados')
  }
}

const Search = async ({ params: { title } }: { params: { title: string } }) => {

  const data: GamesProps[] = await getSearch(title)

  return (
    <>
      <Container>
        <Input />

        <div className='grid grid-cols-1 
          md:grid-cols-3 lg:grid-cols-4 gap-6 
          mt-10 mb-10 px-4 lg:px-0 '>
          {!data && (
            <p>
              Item não encontrado ...
            </p>
          )}

          {data && data.map(item => (
            <Cards key={item.id} data={item} />
          ))}

        </div>

      </Container>
    </>
  )
}

export default Search