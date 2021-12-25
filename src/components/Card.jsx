import { useState, useEffect } from 'react'
import '../styles/card.scss'
import lottie from 'lottie-web'
import giftAnim from '../lottie_json/gift_2.json'
import loveAnim from '../lottie_json/love.json'
const Card = () => {
  const [loveStatus, setLoveStatus] = useState(false)
  const [giftSatus, setGiftStatus] = useState(false)
  let popSoundEffect = new Audio('/sound/pop.mp3')
  let giftPopSound = new Audio('/sound/gift_pop.mp3')
  popSoundEffect.currentTime = 0.65
  giftPopSound.currentTime = 8
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#gift-btn'),
      path: '/lottie_json/gift_2.json',
      loop: false,
      autoplay: false,
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
  useEffect(() => {
    if (giftSatus) {
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
