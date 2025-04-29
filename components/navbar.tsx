"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, LogIn, UserPlus, Gamepad2, Upload, Home, Search } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
          <Link href="/" className="flex items-center gap-2 font-bold text-xl" onClick={closeMenu}>
            <Gamepad2 className="h-6 w-6" />
            <span>GameVault</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-muted-foreground"}`}
          >
            Inicio
          </Link>
          <Link
            href="/games"
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/games") ? "text-primary" : "text-muted-foreground"}`}
          >
            Juegos
          </Link>
          <Link
            href="/categories"
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/categories") ? "text-primary" : "text-muted-foreground"}`}
          >
            Categorías
          </Link>
          <Link
            href="/upload"
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/upload") ? "text-primary" : "text-muted-foreground"}`}
          >
            Subir Juego
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/search">
              <Search className="h-5 w-5" />
              <span className="sr-only">Buscar</span>
            </Link>
          </Button>
          <ModeToggle />
          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/login">
                <LogIn className="mr-2 h-4 w-4" />
                Iniciar Sesión
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/register">
                <UserPlus className="mr-2 h-4 w-4" />
                Registrarse
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            <Link href="/" className="flex items-center gap-2 py-2 text-base font-medium" onClick={closeMenu}>
              <Home className="h-5 w-5" />
              Inicio
            </Link>
            <Link href="/games" className="flex items-center gap-2 py-2 text-base font-medium" onClick={closeMenu}>
              <Gamepad2 className="h-5 w-5" />
              Juegos
            </Link>
            <Link href="/categories" className="flex items-center gap-2 py-2 text-base font-medium" onClick={closeMenu}>
              <Search className="h-5 w-5" />
              Categorías
            </Link>
            <Link href="/upload" className="flex items-center gap-2 py-2 text-base font-medium" onClick={closeMenu}>
              <Upload className="h-5 w-5" />
              Subir Juego
            </Link>
            <div className="pt-4 border-t flex flex-col gap-2">
              <Button className="w-full" asChild>
                <Link href="/login" onClick={closeMenu}>
                  <LogIn className="mr-2 h-4 w-4" />
                  Iniciar Sesión
                </Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/register" onClick={closeMenu}>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Registrarse
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
