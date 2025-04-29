import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Star } from "lucide-react"

interface Game {
  id: string
  title: string
  developer: string
  coverImage: string
  platforms: string[]
  rating: number
  downloads: number
}

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <Link href={`/games/${game.id}`}>
        <div className="relative aspect-[2/3] overflow-hidden">
          <Image
            src={game.coverImage || "/placeholder.svg"}
            alt={game.title}
            fill
            className="object-cover transition-transform hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <Link href={`/games/${game.id}`} className="hover:underline">
          <h3 className="font-bold text-lg line-clamp-1">{game.title}</h3>
        </Link>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{game.developer}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {game.platforms.map((platform) => (
            <Badge key={platform} variant="outline" className="text-xs">
              {platform}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center">
          <Star className="h-4 w-4 text-yellow-500 mr-1" />
          <span>{game.rating}</span>
        </div>
        <div className="flex items-center">
          <Download className="h-4 w-4 mr-1" />
          <span>{game.downloads}</span>
        </div>
      </CardFooter>
    </Card>
  )
}
