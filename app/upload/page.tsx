"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, ImageIcon, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function UploadPage() {
  const [gameTitle, setGameTitle] = useState("")
  const [gameDescription, setGameDescription] = useState("")
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState("")
  const [coverImage, setCoverImage] = useState<File | null>(null)
  const [gameFile, setGameFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handlePlatformChange = (platform: string) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(selectedPlatforms.filter((p) => p !== platform))
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform])
    }
  }

  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverImage(e.target.files[0])
    }
  }

  const handleGameFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setGameFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de carga
    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccess(true)

      // Resetear el formulario después de mostrar el éxito
      setTimeout(() => {
        setGameTitle("")
        setGameDescription("")
        setSelectedPlatforms([])
        setSelectedCategory("")
        setCoverImage(null)
        setGameFile(null)
        setShowSuccess(false)
      }, 3000)
    }, 2000)
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Subir Juego</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Comparte tu juego con nuestra comunidad. Todos los juegos son revisados antes de ser publicados.
          </p>

          {showSuccess && (
            <Alert className="mb-6 bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-400">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>¡Éxito!</AlertTitle>
              <AlertDescription>
                Tu juego ha sido enviado correctamente y está en proceso de revisión. Te notificaremos cuando sea
                aprobado.
              </AlertDescription>
            </Alert>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Información del juego</CardTitle>
              <CardDescription>
                Proporciona los detalles de tu juego para que los usuarios puedan encontrarlo fácilmente.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Título del juego *</Label>
                  <Input
                    id="title"
                    value={gameTitle}
                    onChange={(e) => setGameTitle(e.target.value)}
                    placeholder="Ej. Space Explorer"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descripción *</Label>
                  <Textarea
                    id="description"
                    value={gameDescription}
                    onChange={(e) => setGameDescription(e.target.value)}
                    placeholder="Describe tu juego, características principales, historia, etc."
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Plataforma *</Label>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="windows"
                        checked={selectedPlatforms.includes("Windows")}
                        onCheckedChange={() => handlePlatformChange("Windows")}
                      />
                      <Label htmlFor="windows" className="font-normal">
                        Windows (EXE)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="android"
                        checked={selectedPlatforms.includes("Android")}
                        onCheckedChange={() => handlePlatformChange("Android")}
                      />
                      <Label htmlFor="android" className="font-normal">
                        Android (APK)
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Categoría *</Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="action">Acción</SelectItem>
                      <SelectItem value="adventure">Aventura</SelectItem>
                      <SelectItem value="rpg">RPG</SelectItem>
                      <SelectItem value="strategy">Estrategia</SelectItem>
                      <SelectItem value="simulation">Simulación</SelectItem>
                      <SelectItem value="sports">Deportes</SelectItem>
                      <SelectItem value="puzzle">Puzzle</SelectItem>
                      <SelectItem value="racing">Carreras</SelectItem>
                      <SelectItem value="shooter">Shooter</SelectItem>
                      <SelectItem value="platformer">Plataformas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cover">Imagen de portada *</Label>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <Input id="cover" type="file" accept="image/*" onChange={handleCoverImageChange} required />
                    </div>
                    {coverImage && (
                      <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                        <ImageIcon className="h-4 w-4" />
                        <span>{coverImage.name}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">
                    Formato recomendado: JPG o PNG, relación de aspecto 2:3, tamaño máximo 2MB
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="game-file">Archivo del juego *</Label>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <Input id="game-file" type="file" accept=".exe,.apk" onChange={handleGameFileChange} required />
                    </div>
                    {gameFile && (
                      <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                        <Upload className="h-4 w-4" />
                        <span>{gameFile.name}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">
                    Formatos aceptados: EXE (Windows) o APK (Android), tamaño máximo 2GB
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Términos y condiciones *</Label>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="font-normal text-sm">
                      Confirmo que este juego es de mi propiedad o tengo los derechos para distribuirlo, y acepto los
                      <a href="/terms" className="text-primary hover:underline">
                        {" "}
                        términos y condiciones
                      </a>{" "}
                      de GameVault.
                    </Label>
                  </div>
                </div>

                <CardFooter className="flex justify-end px-0 pt-4">
                  <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                    {isSubmitting ? "Subiendo..." : "Subir Juego"}
                  </Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
