import { styled } from '@stitches/react'

import { fadeInUp } from '../style'

const TextItems = styled('div', {
  animation: `${fadeInUp} 700ms`,
  animationDelay: '800ms',
  animationFillMode: 'backwards',
  backgroundColor: 'white',
  marginLeft: '50%',
})
const TextItem = styled('div', {
  marginBottom: '20px',
})
const TextBold = styled('span', {
  fontWeight: 'bold',
})

const TextSection = () => {
  return (
    <TextItems>
      <TextItem>
        <TextBold>
          <span id="traveler">0</span>만 명
        </TextBold>
        의 여행자
      </TextItem>
      <TextItem>
        <TextBold>
          <span id="review">0</span>만 개
        </TextBold>
        의 여행 리뷰
      </TextItem>
      <TextItem>
        <TextBold>
          <span id="schedule">0</span>만 개
        </TextBold>
        의 여행 일정
      </TextItem>
    </TextItems>
  )
}

export default TextSection
