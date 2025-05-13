import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 py-8 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold text-white">
                            <span className="text-purple-500">Game</span>Daily
                        </h2>
                        <p className="text-gray-400 mt-2">© 2024 GameDaily. Todos os direitos reservados.</p>
                    </div>
                    <div className="flex space-x-6">
                        <Link href="/perfil" className="text-gray-400 hover:text-purple-500">
                            Perfil
                        </Link>
                        <a href="#" className="text-gray-400 hover:text-purple-500">
                            Sobre
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}