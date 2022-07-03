import { styled } from '@stitches/react'
import { useEffect, useRef } from 'react'

import { fadeIn } from '../styles/animations'

import Counter from './Counter'

const TextItems = styled('div', {
  animation: `${fadeIn} 700ms`,
  animationDelay: '800ms',
  animationFillMode: 'backwards',
  backgroundColor: 'white',
  marginLeft: '60%',
})
const TextItem = styled('div', {
  color: 'rgb(58, 58, 58)',
  fontSize: '36px',
  fontFamily: 'sans-serif',
  marginBottom: '20px',
})
const TextBold = styled('span', {
  fontWeight: 'bold',
})

const TextSection = () => {
  const traveler = useRef<HTMLSpanElement>(null)
  const review = useRef<HTMLSpanElement>(null)
  const schedule = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    Counter(traveler, 700, 36, 0.97)
    Counter(review, 100, 140, 0.8)
    Counter(schedule, 470, 34, 0.95)
  }, [])

  return (
    <TextItems>
      <TextItem>
        <TextBold>
          <span ref={traveler}>0</span>만 명
        </TextBold>
        의 여행자
      </TextItem>
      <TextItem>
        <TextBold>
          <span ref={review}>0</span>만 개
        </TextBold>
        의 여행 리뷰
      </TextItem>
      <TextItem>
        <TextBold>
          <span ref={schedule}>0</span>만 개
        </TextBold>
        의 여행 일정
      </TextItem>
    </TextItems>
  )
}

export default TextSection
