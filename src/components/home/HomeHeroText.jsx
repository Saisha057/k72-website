import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-5 text-center'>
     <div className='text-[10vw] justify-center flex items-center  uppercase leading-[9vw] letter-spacing-[1vw]'>
      L'étincelle
      </div>

     <div className='text-[10vw] justify-center flex items-center uppercase leading-[9vw] letter-spacing-[1vw]'>
      qui
      <div className='h-[8vw] w-[16vw] rounded-full overflow-hidden'>
        <Video />
        </div>
        génère</div>

     <div className='text-[10vw] justify-center flex items-center  uppercase leading-[9vw] letter-spacing-[1vw]'>la créativité</div>
    </div>
  )
}

export default HomeHeroText
