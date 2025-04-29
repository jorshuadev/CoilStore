"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ThumbsUp, ThumbsDown, Flag } from "lucide-react"

interface Comment {
  id: string
  user: {
    name: string
    avatar?: string
  }
  date: string
  content: string
  likes: number
  dislikes: number
}

interface GameCommentsProps {
  gameId: string
}

export function GameComments({ gameId }: GameCommentsProps) {
  const [commentText, setCommentText] = useState("")

  // Datos de ejemplo para los comentarios
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      user: {
        name: "Carlos Rodríguez",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "2023-12-15",
      content:
        "¡Increíble juego! Los gráficos son impresionantes y la jugabilidad es muy fluida. Lo recomiendo totalmente para los fans de los juegos de aventura espacial.",
      likes: 24,
      dislikes: 2,
    },
    {
      id: "2",
      user: {
        name: "María López",
      },
      date: "2023-12-10",
      content:
        "Me encanta la historia y los personajes. El único problema que encontré fue un pequeño bug en la misión 3, pero nada que arruine la experiencia general.",
      likes: 15,
      dislikes: 1,
    },
    {
      id: "3",
      user: {
        name: "Juan Pérez",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "2023-12-05",
      content:
        "Para ser un juego gratuito, ofrece muchísimo contenido. He jugado durante horas y todavía me queda mucho por descubrir. La versión de Android funciona perfectamente en mi dispositivo.",
      likes: 32,
      dislikes: 0,
    },
  ])

  const handleSubmitComment = () => {
    if (!commentText.trim()) return

    const newComment: Comment = {
      id: Date.now().toString(),
      user: {
        name: "Usuario",
      },
      date: new Date().toISOString().split("T")[0],
      content: commentText,
      likes: 0,
      dislikes: 0,
    }

    setComments([newComment, ...comments])
    setCommentText("")
  }

  const handleLike = (commentId: string) => {
    setComments(
      comments.map((comment) => (comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment)),
    )
  }

  const handleDislike = (commentId: string) => {
    setComments(
      comments.map((comment) => (comment.id === commentId ? { ...comment, dislikes: comment.dislikes + 1 } : comment)),
    )
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Deja tu comentario</h3>
        <Textarea
          placeholder="Escribe tu comentario aquí..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="min-h-[100px]"
        />
        <div className="flex justify-end">
          <Button onClick={handleSubmitComment}>Publicar comentario</Button>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold">{comments.length} Comentarios</h3>

        {comments.map((comment) => (
          <div key={comment.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src={comment.user.avatar || "/placeholder.svg"} />
                <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{comment.user.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(comment.date).toLocaleDateString()}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Flag className="h-4 w-4" />
                    <span className="sr-only">Reportar</span>
                  </Button>
                </div>

                <p className="my-3">{comment.content}</p>

                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1"
                    onClick={() => handleLike(comment.id)}
                  >
                    <ThumbsUp className="h-4 w-4" />
                    <span>{comment.likes}</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1"
                    onClick={() => handleDislike(comment.id)}
                  >
                    <ThumbsDown className="h-4 w-4" />
                    <span>{comment.dislikes}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
