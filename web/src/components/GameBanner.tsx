interface IGameBannerProps {
  bannerUrl: string,
  title: string,
  adsCount: number,
}

export function GameBanner(props: IGameBannerProps) {
  const {bannerUrl, title, adsCount} = props 
  
  return (
    <div className='relative rounded-lg overflow-hidden flex-shrink-0 '>
      <img src={bannerUrl} alt="" className="max-w-[12rem]"/>
      <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
        <strong className='font-bold text-white block'>{title}</strong>
        <span className='text-zinc-300 text-sm block'>{adsCount} anúncio(s)</span>
      </div>
    </div>
  )
}