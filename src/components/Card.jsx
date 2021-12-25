import { useState, useEffect } from 'react'
import '../styles/card.scss'
import lottie from 'lottie-web'

const Card = () => {
  // state for managing love react
  const [loveStatus, setLoveStatus] = useState(false)
  // state for managing gift open or close status
  const [giftSatus, setGiftStatus] = useState(false)
  let popSoundEffect = new Audio('/sound/pop.mp3')
  let giftPopSound = new Audio('/sound/gift_pop.mp3')

  // seek sound to required time
  popSoundEffect.currentTime = 0.65
  giftPopSound.currentTime = 8
  useEffect(() => {
    lottie.loadAnimation({
      // container stores the element where you want to render your animation
      container: document.querySelector('#gift-btn'),
      // path of the required json file
      path: '/lottie_json/gift_2.json',
      loop: false,
      autoplay: false,
      // name of the animation to reference it later
      name: 'giftAnim',
    })
    lottie.loadAnimation({
      container: document.querySelector('#love-btn'),
      path: '/lottie_json/love.json',
      loop: false,
      autoplay: false,
      name: 'loveAnim',
    })
  }, [])
  // useeffects hook for playing/stoping sound and animation after change of the state
  // for gift animation
  useEffect(() => {
    if (giftSatus) {
      // the sound effect I used was in between the mp3..
      // was lazy to crop the sound so intead wrote a simple program for it.
      setTimeout(() => {
        giftPopSound.play()
        setTimeout(() => {
          giftPopSound.pause()
        }, 500)
      }, 700)
      lottie.play('giftAnim')
    } else {
      lottie.stop('giftAnim')
    }
  }, [giftSatus])

  // for love react
  useEffect(() => {
    if (loveStatus) {
      popSoundEffect.play()
      lottie.play('loveAnim')
    } else {
      lottie.stop('loveAnim')
    }
  }, [loveStatus])
  return (
    <div className='card'>
      <img src='img/christmas.jpg' alt='christmas photo' />
      <div className='info-container'>
        <h1>Merry Christmas</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          voluptatibus cupiditate earum, dignissimos et itaque molestiae
          deserunt odio cumque laudantium asperiores eligendi tempore possimus
          eius nisi dolorem numquam natus corrupti.
        </p>
      </div>
      <div className='buttons-container'>
        <button
          id='love-btn'
          onClick={() => setLoveStatus(!loveStatus)}
        ></button>
        <button
          id='gift-btn'
          onClick={() => setGiftStatus(!giftSatus)}
        ></button>
      </div>
    </div>
  )
}
export default Card
