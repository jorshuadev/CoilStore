import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GameCard } from "@/components/game-card"
import { PlatformFilter } from "@/components/platform-filter"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Home() {
  // Datos de ejemplo para los juegos
  const featuredGames = [
    {
      id: "1",
      title: "Space Explorer",
      developer: "Cosmic Studios",
      coverImage: "/placeholder.svg?height=300&width=200",
      platforms: ["Windows", "Android"],
      rating: 4.5,
      downloads: 1250,
    },
    {
      id: "2",
      title: "Zombie Survival",
      developer: "Undead Games",
      coverImage: "/placeholder.svg?height=300&width=200",
      platforms: ["Windows"],
      rating: 4.2,
      downloads: 980,
    },
    {
      id: "3",
      title: "Racing Legends",
      developer: "Speed Demons",
      coverImage: "/placeholder.svg?height=300&width=200",
      platforms: ["Android"],
      rating: 4.7,
      downloads: 2340,
    },
    {
      id: "4",
      title: "Fantasy Quest",
      developer: "Magic Realms",
      coverImage: "/placeholder.svg?height=300&width=200",
      platforms: ["Windows", "Android"],
      rating: 4.8,
      downloads: 3100,
    },
    {
      id: "5",
      title: "Puzzle Master",
      developer: "Brain Games",
      coverImage: "/placeholder.svg?height=300&width=200",
      platforms: ["Android"],
      rating: 4.3,
      downloads: 1560,
    },
    {
      id: "6",
      title: "City Builder",
      developer: "Urban Designs",
      coverImage: "/placeholder.svg?height=300&width=200",
      platforms: ["Windows"],
      rating: 4.6,
      downloads: 1870,
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">GameVault</h1>
            <p className="text-xl mb-8">Tu plataforma para descubrir y compartir juegos gratuitos</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/games">Explorar Juegos</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20" asChild>
                <Link href="/upload">Subir Juego</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
      </section>

      {/* Search and Filter Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input type="search" placeholder="Buscar juegos..." className="pl-10 w-full" />
          </div>
          <PlatformFilter />
        </div>
      </section>

      {/* Featured Games */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Juegos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Categorías</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Acción", "Aventura", "Estrategia", "RPG", "Deportes", "Puzzle", "Simulación", "Indie"].map((category) => (
            <Link
              key={category}
              href={`/category/${category.toLowerCase()}`}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <h3 className="font-medium">{category}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Eres desarrollador?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Comparte tus creaciones con nuestra comunidad de jugadores. Sube tus juegos APK o EXE completamente gratis.
          </p>
          <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20" asChild>
            <Link href="/upload">Subir mi Juego</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">GameVault</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-md">
                Tu plataforma para descubrir y compartir juegos gratuitos para Windows y Android.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-medium mb-4">Explorar</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/games"
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      Todos los juegos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/categories"
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      Categorías
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/platforms"
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      Plataformas
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">Comunidad</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/developers"
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      Desarrolladores
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/forum"
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      Foro
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/discord"
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      Discord
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/terms"
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      Términos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      Privacidad
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      Contacto
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-300">
            <p>© {new Date().getFullYear()} GameVault. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
