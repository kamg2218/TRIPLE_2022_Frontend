import { styled } from '@stitches/react'

import logo from '../img/triple2x.png'
import { fadeInUp } from '../style'

const LogoItems = styled('div', {
  animation: `${fadeInUp} 700ms`,
})
const LogoText = styled('div', {
  bottom: '50px',
  fontSize: '15px',
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
