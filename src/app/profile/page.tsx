"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { BiPlus, BiSave } from "react-icons/bi"
import { BsArrowLeft } from "react-icons/bs"
import { CiTrash } from "react-icons/ci"
// import { ArrowLeft, Plus, X, Save } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface FavoriteGame {
  id: string
  name: string
  addedAt: Date
}

export default function ProfilePage() {
    const [userName, setUserName] = useState("Usuário")
    const [isEditingName, setIsEditingName] = useState(false)

    const [newGame, setNewGame] = useState("")
    const [favoriteGames, setFavoriteGames] = useState<FavoriteGame[]>([])

    // const [tempName, setTempName] = useState("")
    // const [avatarUrl, setAvatarUrl] = useState("/placeholder.svg?height=200&width=200")

//   // Carregar dados do localStorage quando o componente montar
//   useEffect(() => {
//     const storedGames = localStorage.getItem("favoriteGames")
//     const storedName = localStorage.getItem("userName")
//     const storedAvatar = localStorage.getItem("userAvatar")

//     if (storedGames) {
//       setFavoriteGames(JSON.parse(storedGames))
//     }

//     if (storedName) {
//       setUserName(storedName)
//       setTempName(storedName)
//     }

//     if (storedAvatar) {
//       setAvatarUrl(storedAvatar)
//     }
//   }, [])

//   // Salvar dados no localStorage quando mudar
//   useEffect(() => {
//     localStorage.setItem("favoriteGames", JSON.stringify(favoriteGames))
//   }, [favoriteGames])

//   useEffect(() => {
//     localStorage.setItem("userName", userName)
//   }, [userName])

//   useEffect(() => {
//     localStorage.setItem("userAvatar", avatarUrl)
//   }, [avatarUrl])

  const addGame = () => {
    if (newGame.trim() === "") return

    const newFavoriteGame: FavoriteGame = {
      id: Date.now().toString(),
      name: newGame,
      addedAt: new Date(),
    }

    setFavoriteGames((prev) => [...prev, newFavoriteGame])
    setNewGame("")
  }

  const removeGame = (id: string) => {
    setFavoriteGames((prev) => prev.filter((game) => game.id !== id))
  }

//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter") {
//       addGame()
//     }
//   }

//   const startEditName = () => {
//     setTempName(userName)
//     setIsEditingName(true)
//   }

  const saveName = () => {
    
  }

//   const handleNameKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter") {
//       saveName()
//     }
//   }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-purple-500 hover:text-purple-400 mb-6">
          <BsArrowLeft className="mr-2 h-4 w-4" />
          Voltar para a página inicial
        </Link>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            {/* Cabeçalho do perfil */}
            <div className="bg-gradient-to-r from-purple-900/50 to-gray-800 p-6 sm:p-10">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="relative group w-50 h-50">
                    <Image src="/profile.jpg" alt={"profile"} fill className="object-cover rounded-full" />
               
                </div>

                <div className="text-center sm:text-left">
                    {isEditingName ?
                    (
                        <div className="flex items-center gap-2">
                            <input 
                                className="w-11/12 h-10 bg-[rgb(55,65,81)] outline-none  text-white font-bold rounded-lg px-4 border-4 border-black "
                                type="text"
                                placeholder="Procurando algum jogo?"
                                value={userName}
                                onChange={ (event) => setUserName(event.target.value) }
                            />
                        <button  onClick={() => setIsEditingName(false)}>
                            <BiSave className="h-4 w-4" />
                        </button> 
                        </div>
                    )
                    :
                    (
                        <div className="flex gap-5">
                            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 flex items-center gap-2">
                                {userName}
                            </h1>
                            <button
                            className="h-15 w-15 rounded-full opacity-50 hover:opacity-100"
                            onClick={() => setIsEditingName(true)}
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                            </svg>
                            </button>
                        </div>
                    )}
 
                
                  <p className="text-gray-300">Meus jogos favoritos</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex gap-2 mb-6">
                <input
                  placeholder="Adicionar jogo aos favoritos..."
                  value={newGame}
                  onChange={(e) => setNewGame(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input
                  px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent 
                  file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground 
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-gray-700"
                  
                />
                <button  
                    onClick={addGame}
                    className="bg-purple-600 hover:bg-purple-700 hover:bg-accent hover:text-accent-foreground flex justify-center items-center p-2 font-bold rounded-lg">
                    <BiPlus className="h-4 w-4 mr-2" />
                    Adicionar
                </button>
              </div>

              {favoriteGames.length === 0 ? (
                <div className="text-center py-10 bg-gray-900/50 rounded-lg">
                  <p className="text-gray-400 mb-2">Sua lista de jogos favoritos está vazia</p>
                  <p className="text-sm text-gray-500">Adicione jogos que você gosta para acompanhar</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {favoriteGames.map((game) => (
                    <div
                      key={game.id}
                      className="flex items-center justify-between bg-gray-700/50 p-3 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-center">
                        <div className="h-2 w-2 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-white">{game.name}</span>
                      </div>
                      <button
                        onClick={() => removeGame(game.id)}
                        className="h-12 w-12 text-gray-400 hover:text-white hover:bg-gray-600 flex justify-center items-center"
                      >
                        <CiTrash size={12} className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
