import { createContext, useEffect, useState, ReactNode, FormEvent } from "react";
import axios from 'axios'


interface IGame {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

type TContextAPIProviderProps = {
  children: ReactNode
}

interface IContext {
  games: IGame[],
  setGames: React.Dispatch<React.SetStateAction<IGame[]>>,
  weekDays: string[],
  setWeekDays: React.Dispatch<React.SetStateAction<string[]>>,
  useVoiceChannel: boolean,
  setUseVoiceChannel: React.Dispatch<React.SetStateAction<boolean>>,
  handleCreateAd(event: FormEvent): Promise<void>
}

export const ContextAPI = createContext<IContext>({} as IContext)

export function ContextAPIProvider ({children}: TContextAPIProviderProps) {
  const [games, setGames] = useState< IGame[] >([])
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [useVoiceChannel, setUseVoiceChannel] = useState(false)

  async function axiosGet () {
    const res = await axios('http://localhost:3333/games')
    const sortedData = res.data.sort(function (a: IGame, b: IGame) {
      if (a._count.ads > b._count.ads) {
          return -1
      }
      if (a._count.ads < b._count.ads) {
          return 1
      } // if a === b
      return 0
    })
    setGames(sortedData)
  }



  useEffect(() => {
    axiosGet()
  }, [])

  async function handleCreateAd(event: FormEvent) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    
    if(data.name === ''){
      return
    }

    try {
      await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: useVoiceChannel
      })
      alert('Anúncio criado com sucesso!')
      } catch (err) {
        console.log(err)
        alert('Erro ao criar o anúncio!')
      }
    
  }

  return (
    <ContextAPI.Provider 
      value={{
        games, 
        setGames, 
        weekDays, 
        setWeekDays, 
        useVoiceChannel, 
        setUseVoiceChannel, 
        handleCreateAd,
      }}
    >
      {children}
    </ContextAPI.Provider>
  )
}