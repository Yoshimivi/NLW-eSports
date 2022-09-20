import * as Select from '@radix-ui/react-select'
import { Check, CaretDown, CaretUp } from 'phosphor-react'
import { useContext } from 'react'
import { ContextAPI } from '../context/contextAPI';

export function GameSelect() {
  const { games } = useContext(ContextAPI)

  return (
    <Select.Root name='game'>
      <Select.Trigger aria-label='Games' 
        className='bg-zinc-900 py-3 px-4 rounded text-sm flex  justify-between items-center  
        '>
        <Select.Value placeholder='Selecione o game que quer jogar' className='text-white' />
        <Select.Icon>
          <CaretDown />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content>
          <Select.ScrollUpButton className='flex items-center justify-center bg-zinc-900 text-white mt-3'>
            <CaretUp />
          </Select.ScrollUpButton>

            <Select.Viewport className=''>
              <Select.Group 
                className='bg-zinc-900 py-4  rounded text-sm text-white flex flex-col gap-2 '
              >

                <Select.Label className='text-zinc-500 px-5'>Games</Select.Label>

                  { games.map(game => {
                    return (
                      <Select.Item key={game.id} value={game.id} className=' px-7 flex flex-row-reverse justify-end items-center cursor-pointer gap-2 hover:bg-zinc-800 hover:text-violet-500 leading-5 rounded relative'>
                        <Select.ItemText >{game.title}</Select.ItemText>
                        <Select.ItemIndicator className=' absolute left-1.5'>
                          <Check weight='bold'/>
                        </Select.ItemIndicator>
                      </Select.Item>
                    )
                  })}

              </Select.Group>
            </Select.Viewport>

          <Select.ScrollDownButton className='flex items-center justify-center bg-zinc-900 text-white mt-3'>
            <CaretDown />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}