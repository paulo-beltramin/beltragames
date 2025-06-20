import Link from "next/link"
import { GamesProps } from "@/interface"

type gamesPropsCards = {
  data: GamesProps
}


const Cards =  ({ data }: gamesPropsCards) => {


  return (
    <>

      <div>
        <ul className="">
          <Link href={`/details/${data.id}`}>
            <li className=" w-full h-64 p-5 rounded-lg hover:scale-105">
              <img
                src={data.image_url}
                alt={data.title}
                className="w-full object-cover rounded-lg"
              />

              <p className=" text-base p-5 truncate ">
                {data.title}
              </p>
            </li>
          </Link>
        </ul>
      </div>
    </>
  )
}

export default Cards