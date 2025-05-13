import GameDetails from "@/components/gamedetails/page";
import RecommendedGames from "@/components/recommendedgames/page";
import { GameProps } from "@/utils/types/game";
import { Metadata } from "next";
import Link from "next/link"
import { BsArrowLeft } from "react-icons/bs";


interface PropsParams {
  params: {
    id: string;
  }
}

export async function generateMetadata({params} : PropsParams): Promise<Metadata> {
  try {
    const { id } = params;
    const response: GameProps = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`, {next: {revalidate: 60}})
    
    .then((res) => res.json())
    .catch(() => {
        return {
          title: "Daily Games - Descubra jogos incríveis para se divertir."
        }
    })

    return{
      title: response.title,
      description: `${response.description.slice(0, 100)}...`,
      openGraph: {
        title: response.title,
        images: [response.image_url],
      },
      robots: {
        index:true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true
        }
      }
      
    }

  } catch(err) {
    return {
      title: "Daily Games - Descubra jogos incríveis para se divertir."
    }
  }
}


async function getData(id: string) {
    try {
      const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`, {next: {revalidate: 60}})
      return res.json();
    } catch(err) {
      console.error("Fetch error:", err);
      throw new Error("Failed to fetch data")
    }
}

async function getDailyGame() {
    try {
      const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, {cache: "no-store"})
      return res.json();
    } catch(err) {
      console.error("Fetch error:", err);
      throw new Error("Failed to fetch data")
    }
  }

export default async function Game({ 
    params : { id } 
    }: {
    params: { id: string } 
    }) {

    const data = await getData(id)
    const dailyGame = await getDailyGame();

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Jogo não encontrado</h1>
          <Link href="/" className="inline-flex items-center text-purple-500 hover:text-purple-400">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    )
  }


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-purple-500 hover:text-purple-400 mb-6">
          <BsArrowLeft className="mr-2 h-4 w-4" />
          Voltar para a página inicial
        </Link>

        <GameDetails game={data} />

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Jogos Recomendados</h2>
          {/* <RecommendedGames games={recommendedGames} /> */}
          <RecommendedGames dailyGames={dailyGame} />
        </div>
      </div>
    </div>
  )
}
