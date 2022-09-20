import './styles/main.css'

import { useContext, useState } from 'react'

import logoImg from './assets/logo-nlw-esports.svg'
import { ContextAPI } from './context/contextAPI'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { CreateAdModal } from './components/CreateAdModal'
import { GameAdModal } from './components/GameAdModal'
import { Input } from './components/Form/Input'

import * as Dialog from '@radix-ui/react-dialog'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function App() {
  const { games } = useContext(ContextAPI)
  const [searchGame, setSearchGame] = useState<string>('')

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center mt-16'>
      <img src={ logoImg } className='mx-16' alt="" />
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-black mt-20 mb-8 text-center'>Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.</h1>
      <Input placeholder='Procure por um jogo!' onChange={e => setSearchGame(e.target.value.toLowerCase())}/>
     
    
      <div id='gameBannerCaroussel' className='flex flex-row justify-center items-center gap-6 mt-8 mx-8 max-w-[95%] w-full overflow-y-hidden pb-4 z-0 h-74' >
        {searchGame.length !== 0 
        ? <div className='mb-8 flex gap-6'>{games.filter(game => game.title.toLowerCase().includes(searchGame))
          .map((game, index) => {
            return (
                <Dialog.Root key={game.id}>
                  <Dialog.Trigger>
                    <GameBanner
                      bannerUrl={game.bannerUrl} 
                      title={game.title}
                      adsCount={game._count.ads}
                    />
                  </Dialog.Trigger>
                  <GameAdModal 
                    index={index}
                    game={game.id} 
                    title={game.title}
                    bannerUrl={game.bannerUrl}
                  />
                </Dialog.Root>
            )
          })}</div>
        :<Swiper 
          slidesPerView={6}
          
          className=' h-72 '
        >
          {games.filter(game => game.title.toLowerCase().includes(searchGame))
          .map((game, index) => {
            return (
               <SwiperSlide key={game.id}> 
                <Dialog.Root key={game.id}>
                  <Dialog.Trigger>
                    <GameBanner
                      bannerUrl={game.bannerUrl} 
                      title={game.title}
                      adsCount={game._count.ads}
                    />
                  </Dialog.Trigger>
                  <GameAdModal 
                    index={index}
                    game={game.id} 
                    title={game.title}
                    bannerUrl={game.bannerUrl}
                  />
                </Dialog.Root>
              </SwiperSlide> 
            )
          })}
        </Swiper>}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
      
    </div>
    
  )
}

export default App
