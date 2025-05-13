import Container from "@/components/container/page";
import GameCard from "@/components/gamecard/page";
import Input from "@/components/input/page";
import RecommendedGames from "@/components/recommendedgames/page";
import { GameProps } from "@/utils/types/game";

async function getDailyGame() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, {next: {revalidate: 320}})
    return res.json();
  } catch(err) {
    throw new Error("Failed to fetch data")
  }
}
async function getGamesData() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, {next: {revalidate: 320}})
    return res.json();
  } catch(err) {
    throw new Error("Failed to fetch data")
  }
}
// '/next-api/?api=game_day'
export default async function Home() {
  const dailyGames : GameProps = await getDailyGame();
  const data : GameProps[] = await getGamesData();
  return (
      <main className="flex w-full bg-gradient-to-b from-gray-900 to-gray-800">
       <Container >
        <h1 className="text-center font-bold text-xl mt-8 mb-5">Separamos um jogo exclusivo para você</h1>
          <RecommendedGames dailyGames={dailyGames} />

        <Input />

        <h2 className="text-lg font-bold mt-8 mb-5">Jogos para conhecer</h2>
        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data?.map( (item) => (
            <GameCard key={item.id} data={item} />
          ))}
        </section>
       </Container>
      </main>
  );
}
