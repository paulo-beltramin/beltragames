"use client"

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { FaSearch } from "react-icons/fa";


const Input= () => {
    const [input, setInput] = useState('')

    const router = useRouter()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (input === '') {
            return;
        }

        router.push(`/search/${input}`)
    }
    return (
        <div>

            <form className="w-full mt-11 mb-16 bg-slate-200 flex justify-between items-center rounded-lg px-3"
                onSubmit={handleSubmit}>
                <input className=" w-11/12 py-2 outline-none  
                     rounded-lg "type="text" placeholder="Digite sua busca"
                    value={input} onChange={e => setInput(e.target.value)} />
                <button className="cursor-pointer" type="submit">
                    <FaSearch size={24} />
                </button>

            </form>

        </div>
    )
}

export default Input