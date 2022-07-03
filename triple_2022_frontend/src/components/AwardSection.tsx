import { styled } from '@stitches/react'

import playstore from '../assets/images/play-store2x.png'
import appstore from '../assets/images/badge-apple4x.png'
import { fadeIn } from '../styles/animations'

const AwardItems = styled('div', {
  backgroundColor: 'white',
  display: 'flex',
  marginLeft: '60%',
  marginTop: '40px',
})
const AwardItem = styled('div', {
  alignItems: 'center',
  animation: `${fadeIn} 700ms`,
  animationDelay: '1600ms',
  animationFillMode: 'backwards',
  display: 'flex',
  marginRight: '4%',
  padding: '5px 0px',
})
const AwardImg = styled('img', {
  width: '54px',
  height: '54px',
  marginRight: '1%',
})
const AwardText = styled('div', {
  color: 'rgba(58, 58, 58, 0.8)',
  fontWeight: 'bold',
  fontFamily: 'sans-serif',
  lineHeight: '22px',
  minWidth: '100%',
})

const AwardSection = () => {
  return (
    <AwardItems>
      <AwardItem>
        <AwardImg src={playstore} alt="googlePlayStore" />
        <AwardText>
          2018 구글 플레이스토어
          <br />
          올해의 앱 최우수상 수상
        </AwardText>
      </AwardItem>
      <AwardItem>
        <AwardImg src={appstore} alt="appleAppStore" />
        <AwardText>
          2018 애플 앱스토어
          <br />
          오늘의 여행앱 선정
        </AwardText>
      </AwardItem>
    </AwardItems>
  )
}
export default AwardSection
