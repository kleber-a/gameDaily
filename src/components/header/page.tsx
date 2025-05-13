import Link from "next/link"
import { LiaGamepadSolid } from 'react-icons/lia'

export default function Header() {

    return (
        <header className="w-full h-28 flex bg-gradient-to-b from-gray-900 to-gray-800 px-10">
            <div className="max-w-screen-xl w-full mx-auto flex justify-center items-center h-28 sm:justify-between">
                <nav className="flex justify-center items-center gap-4">
                    <Link href="/" >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                            <span className="text-purple-500">Game</span>Daily
                       
                        </h1>
                    </Link>
                    <Link href="/" >
                        Games
                    </Link>
                    <Link href="/profile" >
                       Perfil
                    </Link>

                </nav>
                <div className="hidden sm:flex justify-center items-center">
                    <Link href="/profile">
                    <LiaGamepadSolid size={34} color="#475569" />
                    </Link>
                    
                </div>
            </div>
        </header>
    )
}