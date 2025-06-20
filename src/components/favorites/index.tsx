"use client"
import { MdOutlineAddCircle, MdOutlineFileDownloadDone } from "react-icons/md";
import Link from 'next/link'
import { useState } from 'react';


const Favorites = () => {
    const [input, setInput] = useState('')
    const [add, setAdd] = useState(false)
    const [gameName, setGameName] = useState("")

    const handleSubmit = () => {
        setAdd(true)
        setInput('')
    }

    const handleAdd = () => {

        if (input === '') {
            return
        }
        setAdd(false)
        setGameName(input)
        setInput("")
    }

    return (
        <>
            <ul>
                <li className='bg-slate-800 text-white h-48 
                            flex flex-col justify-between p-2'>
                    {add ? (

                        <div className="flex gap-2">
                            <input type="text" placeholder="Digite aqui"
                                className="w-11/12 outline-none border p-1 rounded-lg"
                                value={input} onChange={e => setInput(e.target.value)} />
                            <button onClick={handleAdd} className="cursor-pointer">
                                <MdOutlineFileDownloadDone size={24} />
                            </button>
                        </div>

                    ) : (
                        <Link href={''} className='text-white hover:scale-y-110'
                            onClick={handleSubmit}>
                            <MdOutlineAddCircle size={24} />
                        </Link>
                    )}
                    {!gameName && (
                        <p className="font-bold">
                            Novo favorito...
                        </p>
                    )}

                    {gameName && (
                        <div>
                            <p className="font-bold text-lg">
                                Favorito:
                            </p>

                            <p className="text-base">
                                {gameName}
                            </p>
                        </div>
                    )}
                </li>

            </ul>
        </>
    )
}

export default Favorites