import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { useContext } from 'react'
import { ContextAPI } from '../context/contextAPI'

export function WeekDaysSelector() {
  const {weekDays, setWeekDays} = useContext(ContextAPI)

  return (
  
    <ToggleGroup.Root type='multiple' className='flex flex-wrap justify-center w-[100%] gap-2' value={weekDays} onValueChange={setWeekDays}>
      <ToggleGroup.Item value='0' title='Domingo' 
        className={`w-8 h-8 rounded  ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
      >D</ToggleGroup.Item>
      <ToggleGroup.Item value='1' title='Segunda'
        className={`w-8 h-8 rounded  ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
      >S</ToggleGroup.Item>
      <ToggleGroup.Item value='2' title='Terça'
        className={`w-8 h-8 rounded  ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
      >T</ToggleGroup.Item>
      <ToggleGroup.Item value='3' title='Quarta'
        className={`w-8 h-8 rounded  ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
      >Q</ToggleGroup.Item>
      <ToggleGroup.Item value='4' title='Quinta'
        className={`w-8 h-8 rounded  ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
      >Q</ToggleGroup.Item>
      <ToggleGroup.Item value='5' title='Sexta'
        className={`w-8 h-8 rounded  ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
      >S</ToggleGroup.Item>
      <ToggleGroup.Item value='6' title='Sabado'
        className={`w-8 h-8 rounded  ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
      >S</ToggleGroup.Item>
    </ToggleGroup.Root>
  )
}