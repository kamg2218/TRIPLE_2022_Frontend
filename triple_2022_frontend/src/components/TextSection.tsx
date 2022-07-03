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
  color: 'rgb(58, 58, 58)',
  fontSize: '36px',
  fontFamily: 'sans-serif',
  marginBottom: '20px',
})
const TextBold = styled('span', {
  fontWeight: 'bold',
})

const TextSection = () => {
  const countSlower = (query: Element, upto: number, interval: number) => {
    setTimeout(() => {
      const num = Number(query.innerHTML)
      if (num < upto) {
        query.innerHTML = String(num + 1)
        countSlower(query, upto, interval + 2)
      }
    }, interval)
  }

  const counter = (id: string, upto: number, interval: number) => {
    const result = setInterval(() => {
      const query = document.querySelector(id)
      if (query) {
        const num = Number(query.innerHTML)
        if (num > upto * 0.9) {
          clearInterval(result)
          countSlower(query, upto, interval)
        } else {
          query.innerHTML = String(num + 1)
        }
      }
    }, 1)
    setTimeout(() => {
      const query = document.querySelector(id)
      if (query) {
        query.innerHTML = String(upto)
      }
    }, 2800)
  }

  counter('#traveler', 700, 5)
  counter('#review', 100, 500)
  counter('#schedule', 470, 55)

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
