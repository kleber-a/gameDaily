// import type { Game } from "@/lib/data"
import { GameProps } from "@/utils/types/game"
import Image from "next/image"
// import { Badge } from "@/components/ui/badge"

interface GameDetailsProps {
    game: GameProps
}

export default function GameDetails({ game }: GameDetailsProps) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl">
      <div className="relative h-64 md:h-96 w-full">
        <Image src={game.image_url || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{game.title}</h1>
          <div className="flex flex-wrap gap-2 mb-2">
            {game.platforms.map((platform) => (
              <span key={platform} className="text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-white mb-4">Descrição</h2>
            <p className="text-gray-300 leading-relaxed mb-6">{game.description}</p>
          </div>

          <div className="bg-gray-900 rounded-lg p-5">
            <h2 className="text-xl font-bold text-white mb-4">Informações</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-gray-400 text-sm">Plataformas</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  {game.platforms.map((platform) => (
                    <span key={platform} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
              <div >
                <h3 className="text-gray-400 text-sm">Categoria</h3>
                <div className="flex gap-2">
                    {game.categories.map((category) => (
                        <span key={category} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded h-auto">
                        {category}
                        </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
