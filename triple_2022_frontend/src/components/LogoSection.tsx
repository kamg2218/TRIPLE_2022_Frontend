import { styled } from '@stitches/react'

import logo from '../assets/images/triple2x.png'
import { fadeIn } from '../styles/animations'

const LogoItems = styled('div', {
  animation: `${fadeIn} 700ms`,
  position: 'absolute',
})
const LogoText = styled('div', {
  bottom: '50px',
  color: 'rgba(58, 58, 58, 0.7)',
  fontSize: '15px',
  fontFamily: 'sans-serif',
  left: '50%',
  position: 'absolute',
  transform: 'translateX(-50%)',
})
const LogoImg = styled('img', {
  display: 'block',
  height: '338px',
  width: '400px',
})

const LogoSection = () => {
  return (
    <LogoItems>
      <LogoImg src={logo} alt="logo" />
      <LogoText>2021년 12월 기준</LogoText>
    </LogoItems>
  )
}

export default LogoSection
