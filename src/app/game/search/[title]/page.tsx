import Container from "@/components/container/page";
import GameCard from "@/components/gamecard/page";
import Input from "@/components/input/page";

async function getData(title: string) {

    try {
        const decodedTitle = decodeURI(title)
        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodedTitle}`)
        return res.json();
    } catch(err){
        return null;
    }
}

interface PropsParams {
  params: Promise<{ title: string }>;
}

export default async function Search({ params }: PropsParams) {
    const { title }: {title: string} = await params;

    const games = await getData(title);

    return (
       <main className="w-full text-black h-[calc(100%-132px)]">
        <Container>
            <Input title={title} />

            <h1 className="font-bold text-xl mt-8 mb-5 text-white">Veja o que encontramos na nossa base</h1>

            {!games && (
                <p className="text-white">Esse jogo não foi encontrado!...</p>
            )}

            <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {games && games?.map( (item: any) => (
                <GameCard key={item.id} data={item} />
                ))}
            </section>

        </Container>

       </main>
    )
}