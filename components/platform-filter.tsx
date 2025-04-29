"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Monitor, Smartphone, Filter } from "lucide-react"

export function PlatformFilter() {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])

  const togglePlatform = (platform: string) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(selectedPlatforms.filter((p) => p !== platform))
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform])
    }
  }

  const isSelected = (platform: string) => selectedPlatforms.includes(platform)

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium flex items-center gap-1">
        <Filter className="h-4 w-4" />
        Plataforma:
      </span>
      <Button
        variant={isSelected("Windows") ? "default" : "outline"}
        size="sm"
        onClick={() => togglePlatform("Windows")}
        className="flex items-center gap-1"
      >
        <Monitor className="h-4 w-4" />
        Windows
      </Button>
      <Button
        variant={isSelected("Android") ? "default" : "outline"}
        size="sm"
        onClick={() => togglePlatform("Android")}
        className="flex items-center gap-1"
      >
        <Smartphone className="h-4 w-4" />
        Android
      </Button>
    </div>
  )
}
