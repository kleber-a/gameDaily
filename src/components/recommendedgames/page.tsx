import { GameProps } from "@/utils/types/game"
import Image from "next/image"
import Link from "next/link"
import { BsArrowRightSquare } from "react-icons/bs"

interface RecommendedGamesProps {
  dailyGames: GameProps
}

export default function RecommendedGames({ dailyGames }: RecommendedGamesProps) {
  return (
    <Link href={`/game/${dailyGames.id}`} >
      <section className="w-full bg-black rounded-lg">
        <div className="w-full max-h-96 h-96 relative">
          <div className="absolute z-20 bottom-0 p-3 flex justify-center items-center gap-2">
            <p className="font-bold text-xl text-white">{dailyGames.title}</p>
            <BsArrowRightSquare size={24} color="#FFF" />
          </div>
          <Image
            src={dailyGames.image_url}
            alt={dailyGames.title}
            priority={true}
            quality={100}
            fill={true}
            className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 trasition-all duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw" />
        </div>
      </section>

    </Link>
  )
}