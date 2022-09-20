import * as Dialog from '@radix-ui/react-dialog'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { GameAdUser } from './GameAdUser'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


interface IGame {
  index: number
  game: string,
  title: string,
  bannerUrl: string,
}

export interface IUser {
  id: string,
  name: string,
  weekDays: string[],
  useVoiceChannel: boolean,
  yearsPlaying: number,
  hourStart: string,
  hourEnd: string,
  discord: string,
}

export function GameAdModal(props: IGame) {
  const { game, title, bannerUrl } = props
  const [adsUserInfo, setAdsUserInfo] = useState<IUser[]>([])

  async function axiosGet () {
    await axios(`http://localhost:3333/games/${game}/ads`)
    .then(response => {
      setAdsUserInfo(response.data)
    })
  }

  useEffect(() => {
    axiosGet()
    
  }, [])

  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-black/80 inset-0 fixed' />

      <Dialog.Content className='fixed bg-backgroundGalaxy bg-cover bg-no-repeat p-6 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg max-w-[480px] overflow-hidden'>
        <Dialog.Title className='text-3xl font-black '>
          <img src={bannerUrl} alt="" className='h-44 w-96 object-cover rounded-lg mx-auto'/>
          <p className='mt-8 ml-5'>{title}</p>
        </Dialog.Title>
        <p className='text-zinc-500 mt-2 ml-5'>Conecte-se e comece a jogar!</p>
        <div id='gameAdCaroussel' className='flex gap-4 overflow-y-auto pb-2'>
          
          {adsUserInfo.length === 0 
          ? <p className='text-xl mx-auto my-6'>Não há anuncios criados ainda</p>
          : <Swiper slidesPerView={adsUserInfo.length > 1 ? 1.7 : 1}> {adsUserInfo.map((userAd) => (  
            <SwiperSlide key={userAd.id}><GameAdUser 
               
              id={userAd.id}
              name={userAd.name}
              weekDays={userAd.weekDays}
              useVoiceChannel={userAd.useVoiceChannel}
              yearsPlaying={userAd.yearsPlaying}
              hourStart={userAd.hourStart}
              hourEnd={userAd.hourEnd}
              discord={userAd.discord}
            /> 
            </SwiperSlide>
          ))}</Swiper>}         
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}

