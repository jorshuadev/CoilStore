import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { GameComments } from "@/components/game-comments"
import { Download, Star, Calendar, Monitor, Smartphone, Share2 } from "lucide-react"

// Esta función simularía obtener los datos del juego desde una API o base de datos
function getGameData(id: string) {
  // Datos de ejemplo
  return {
    id,
    title: "Space Explorer",
    developer: "Cosmic Studios",
    releaseDate: "2023-05-15",
    description:
      "Space Explorer es un juego de aventura en el espacio donde explorarás planetas desconocidos, recolectarás recursos y lucharás contra alienígenas hostiles. Con gráficos impresionantes y una historia inmersiva, te sumergirás en un universo lleno de misterios por descubrir.",
    longDescription:
      "En Space Explorer, te embarcarás en un viaje interestelar como capitán de una nave espacial avanzada. Tu misión es explorar nuevos planetas, establecer colonias y defender a la humanidad de amenazas alienígenas.\n\nCaracterísticas principales:\n\n- Mundo abierto con más de 50 planetas para explorar\n- Sistema de combate dinámico con múltiples armas y habilidades\n- Personalización completa de tu nave espacial\n- Misiones principales y secundarias con historias ramificadas\n- Gráficos 3D de alta calidad con efectos visuales impresionantes\n- Banda sonora original que se adapta a la jugabilidad\n\nRequisitos mínimos:\n- Sistema operativo: Windows 10 64-bit\n- Procesador: Intel Core i5-4460 o AMD FX-6300\n- Memoria: 8 GB RAM\n- Gráficos: NVIDIA GeForce GTX 760 o AMD Radeon R7 260x\n- DirectX: Versión 11\n- Almacenamiento: 15 GB de espacio disponible",
    coverImage: "/placeholder.svg?height=600&width=400",
    screenshots: [
      "/placeholder.svg?height=400&width=700&text=Screenshot+1",
      "/placeholder.svg?height=400&width=700&text=Screenshot+2",
      "/placeholder.svg?height=400&width=700&text=Screenshot+3",
      "/placeholder.svg?height=400&width=700&text=Screenshot+4",
    ],
    platforms: ["Windows", "Android"],
    categories: ["Aventura", "Acción", "Ciencia Ficción"],
    rating: 4.5,
    downloads: 1250,
    fileSize: {
      Windows: "1.2 GB",
      Android: "450 MB",
    },
  }
}

export default function GamePage({ params }: { params: { id: string } }) {
  const game = getGameData(params.id)

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna izquierda - Imagen y detalles */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-lg mb-6">
                <Image
                  src={game.coverImage || "/placeholder.svg"}
                  alt={game.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <span className="font-medium">{game.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Download className="h-5 w-5 mr-1" />
                    <span>{game.downloads}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {game.platforms.map((platform) => (
                    <Badge key={platform} className="flex items-center gap-1">
                      {platform === "Windows" ? <Monitor className="h-3 w-3" /> : <Smartphone className="h-3 w-3" />}
                      {platform}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Publicado: {new Date(game.releaseDate).toLocaleDateString()}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Categorías</h3>
                  <div className="flex flex-wrap gap-2">
                    {game.categories.map((category) => (
                      <Link key={category} href={`/category/${category.toLowerCase()}`}>
                        <Badge variant="outline">{category}</Badge>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Desarrollador</h3>
                  <Link
                    href={`/developer/${game.developer.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm hover:underline"
                  >
                    {game.developer}
                  </Link>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Tamaño del archivo</h3>
                  <ul className="text-sm space-y-1">
                    {Object.entries(game.fileSize).map(([platform, size]) => (
                      <li key={platform} className="flex items-center gap-2">
                        {platform === "Windows" ? <Monitor className="h-4 w-4" /> : <Smartphone className="h-4 w-4" />}
                        {platform}: {size}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full" size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Descargar Juego
                </Button>

                <Button variant="outline" className="w-full">
                  <Share2 className="mr-2 h-5 w-5" />
                  Compartir
                </Button>
              </div>
            </div>
          </div>

          {/* Columna derecha - Contenido principal */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-2">{game.title}</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-6">{game.description}</p>

            <Tabs defaultValue="details" className="mb-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Detalles</TabsTrigger>
                <TabsTrigger value="screenshots">Capturas</TabsTrigger>
                <TabsTrigger value="comments">Comentarios</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="mt-6">
                <div className="prose dark:prose-invert max-w-none">
                  {game.longDescription.split("\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="screenshots" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {game.screenshots.map((screenshot, index) => (
                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={screenshot || "/placeholder.svg"}
                        alt={`Screenshot ${index + 1} de ${game.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="comments" className="mt-6">
                <GameComments gameId={game.id} />
              </TabsContent>
            </Tabs>

            <Separator className="my-8" />

            <h2 className="text-2xl font-bold mb-6">Juegos similares</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((id) => (
                <Link key={id} href={`/games/${id}`} className="group">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-2">
                    <Image
                      src={`/placeholder.svg?height=200&width=350&text=Juego+Similar+${id}`}
                      alt={`Juego similar ${id}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium group-hover:underline">Título del juego similar {id}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
