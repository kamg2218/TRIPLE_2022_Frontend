import { styled } from '@stitches/react'
import { useEffect, useRef } from 'react'

import { fadeInUp } from '../style'

const TextItems = styled('div', {
  animation: `${fadeInUp} 700ms`,
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
    const countSlower = (
      query: HTMLSpanElement,
      upto: number,
      interval: number,
      count: number,
    ) => {
      setTimeout(() => {
        const num = Number(query.innerHTML)
        if (num < upto) {
          query.innerHTML = String(num + 1)
          countSlower(query, upto, interval, count * 1.6)
        }
      }, interval + count)
    }
    const counter = (
      id: React.RefObject<HTMLSpanElement>,
      upto: number,
      interval: number,
      factor: number,
    ) => {
      const result = setInterval(() => {
        const query = id.current
        if (query) {
          const num = Number(query.innerHTML)
          if (num > upto * factor) {
            clearInterval(result)
            countSlower(query, upto, interval, 1)
          } else {
            query.innerHTML = String(num + 1)
          }
        }
      }, 1)
      setTimeout(() => {
        const query = id.current
        if (query) {
          query.innerHTML = String(upto)
        }
      }, 2000)
    }

    counter(traveler, 700, 36, 0.97)
    counter(review, 100, 140, 0.8)
    counter(schedule, 470, 34, 0.95)
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
