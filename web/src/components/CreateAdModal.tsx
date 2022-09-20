import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'

import { Check, GameController } from 'phosphor-react'
import { Input } from './Form/Input'
import { GameSelect } from './GameSelect'
import { WeekDaysSelector } from './WeekDaysSelector'
import { useContext } from 'react'
import { ContextAPI } from '../context/contextAPI'

export function CreateAdModal(){
  const { useVoiceChannel, setUseVoiceChannel, handleCreateAd} = useContext(ContextAPI)

  return (
    <Dialog.Portal>
    <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

    <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg max-w-[480px] shadow-lg shadow-black/25'>
      <Dialog.Title className='text-3xl font-black'>
        Publique um anúncio
      </Dialog.Title>

        <form onSubmit={handleCreateAd} className='mt-8 flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="game" className='font-semibold'>Qual o game?</label>
            <GameSelect />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="name">Seu nome (ou nickname)</label>
            <Input name='name' id='name' placeholder='Como te chamam dentro do game?' autoComplete='off' required/>
          </div>

          <div className='grid grid-cols-2 gap-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
              <Input name='yearsPlaying' id="yearsPlaying" type="number" placeholder='Tudo bem ser ZERO' />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="discord">Qual seu Discord?</label>
              <Input name='discord' id="discord" type="text" placeholder='Usuario#0000' autoComplete='off' required/>
            </div>
          </div>

          <div className='flex gap-6'>
            <div className='flex flex-col gap-2 w-[45%]'>
              <label htmlFor="weekDays">Quando costuma jogar?</label>
              <WeekDaysSelector />
            </div>
            <div className='flex flex-col gap-2 flex-1'>
              <p>Qual horário do dia?</p>
              <div className='grid grid-cols-[1fr_3fr] gap-2'>
                <label htmlFor="hourStart">De</label>
                <Input name='hourStart' id="hourStart" type="time" required/>
                <label htmlFor="hourEnd">Até</label>
                <Input name='hourEnd' id="hourEnd" type="time" required />
              </div>
            </div>
          </div>

          <label className='mt-2 flex items-center gap-2 text-sm'>
            <Checkbox.Root 
              checked={useVoiceChannel}
              onCheckedChange={(checked) => (checked === true ? setUseVoiceChannel(true) : setUseVoiceChannel(false))}
              className='w-6 h-6 p-1 rounded bg-zinc-900'
            >
              <Checkbox.Indicator>
                <Check weight='bold' className='w-4 h-4 text-emerald-400'/>
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>

          <footer className='mt-4 flex justify-end gap-4'>
            <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancelar</Dialog.Close>
            <button className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600' type="submit">
              <GameController size={24}/>
              Encontrar duo
            </button>
          </footer>
        
        </form>

    </Dialog.Content>

  </Dialog.Portal>
  )
}