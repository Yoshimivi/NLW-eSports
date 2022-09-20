import { MagnifyingGlassPlus } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'


export function CreateAdBanner() {
  return (
    <div className='mx-8 bg-nlw-gradient pt-1 self-stretch rounded-lg overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 rounded-t-lg flex flex-col md:flex-row justify-between items-center gap-6'>
          <div>
            <strong className='text-white text-2xl block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 '>Publique um anúncio para encontrar novos players!</span>
          </div>
          <Dialog.Trigger className='text-white py-3 px-4 bg-violet-500 rounded-md hover:bg-violet-600 flex gap-3 items-center'>
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </Dialog.Trigger>
        </div>
      </div>
  )
}