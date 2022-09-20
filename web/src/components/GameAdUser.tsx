import { CheckCircle, GameController } from "phosphor-react"
import { useState } from "react"
import { IUser } from "./GameAdModal"

import * as ToggleGroup from '@radix-ui/react-toggle-group'


export function GameAdUser (props: IUser) {
  const [showDiscord, setShowDiscord] = useState(false)

  return (
    <div className='bg-[#2A2634] rounded-lg py-6 px-8 mt-6 w-[230px] flex'>
      
    {!showDiscord 
    ?
    <div>
      <div>
        <p className='text-zinc-400'>Nome</p> 
        <p className='font-bold mb-3'>{props.name}</p>
      </div>
      <div>
        <p className='text-zinc-400'>Tempo de jogo</p>
        <p className='font-bold mb-3'>{props.yearsPlaying} anos</p>
      </div>
      <div>
        <p className='text-zinc-400'>Disponibilidade</p>
        <div className="flex gap-[3px] mt-1">
          <p className={`w-[23px] h-[23px] rounded text-sm text-center ${props.weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
          >D</p>
          <p className={`w-[23px] h-[23px] rounded text-sm text-center ${props.weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
          >S</p>
          <p className={`w-[23px] h-[23px] rounded text-sm text-center ${props.weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
          >T</p>
          <p className={`w-[23px] h-[23px] rounded text-sm text-center ${props.weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
          >Q</p>
          <p className={`w-[23px] h-[23px] rounded text-sm text-center ${props.weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
          >Q</p>
          <p className={`w-[23px] h-[23px] rounded text-sm text-center ${props.weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
          >S</p>
          <p className={`w-[23px] h-[23px] rounded text-sm text-center ${props.weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
          >S</p>
        </div>
        <p className='font-bold mb-3 whitespace-nowrap'>{props.hourStart} - {props.hourEnd}</p>
      </div>
      <div>
        <p className='text-zinc-400'>Chamada de audio?</p>
        <p className='font-bold mb-3'>{props.useVoiceChannel ? <p className='text-green-600'>Sim</p> : <p className='text-red-600'>Não</p>}</p>
      </div>
      <button onClick={() => setShowDiscord(!showDiscord)}
      className='bg-violet-500 px-6 py-2 rounded-lg font-bold flex gap-4 w-full hover:bg-violet-600 transition-all' ><GameController size={24}/> Conectar</button>
    </div>
    : 
    <div className='flex flex-col w-[230px] h-[307px] justify-center items-center'>
    
      <CheckCircle size={60} className='text-green-600 p-0 mb-6' />
      <p className="font-bold text-3xl">Let's play!</p>
      <p className="text-zinc-400 text-center mb-6 text-sm">Agora é só começar a jogar!</p>
      <p className="font-bold mb-4">Adicione no Discord</p>
      <p className="bg-zinc-900 px-6 py-4 rounded-lg">{props.discord}</p>
    </div>  
    }
    
  </div>
  )
}