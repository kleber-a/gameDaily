import { GameProps } from "@/utils/types/game";
import Image from "next/image";
import Link from "next/link";

interface GameCardProps {
    data: GameProps
}

export default function GameCard({ data }: GameCardProps) {
    return(
        <Link href={`/game/${data.id}`}>
            <section className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 h-full">
            <div className="relative h-48 w-full">
                <Image src={data.image_url || "/placeholder.svg"} alt={data.title} fill className="object-cover" />
            </div>
            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white line-clamp-1">{data.title}</h3>
                {/* <Badge className="bg-purple-600 hover:bg-purple-700">{data.categories}</Badge> */}
                </div>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{data.description}</p>
                <div className="flex flex-wrap gap-2">
                {data.platforms.map((platform) => (
                    <span key={platform} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                    {platform}
                    </span>
                ))}
                </div>
            </div>
            </section>
        </Link>
    );
};