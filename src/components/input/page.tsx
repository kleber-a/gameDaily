"use client"
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Input({title}: {title?: string}) {

    const [input,setInput] = useState("");
    const router = useRouter();

    useEffect(() => {
        const decoded = decodeURIComponent(title ? title: "");
        setInput(decoded);
    },[])

    function handleSearch(event: FormEvent) {
        event.preventDefault();
        if(input === "") return;

        router.push(`/game/search/${input}`)


    }

    return (
        <form 
        onSubmit={handleSearch}
        className="w-full bg-slate-200 my-5 flex gap-2 items-center justify-between rounded-lg p-2"
        >
            <input 
            className="bg-slate-200 outline-none w-11/12 text-black"
            type="text"
            placeholder="Procurando algum jogo?"
            value={input}
            onChange={ (event) => setInput(event.target.value) }
            />
            <button>
                <FiSearch size={24} color="#ea580c" />
            </button>

        </form>
    )

}