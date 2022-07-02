import { styled } from '@stitches/react'

import BadgeSection from './BadgeSection'
import LogoSection from './LogoSection'
import TextSection from './TextSection'

const StatisticItems = styled('div', {
  margin: 'auto',
  position: 'relative',
  width: '1080px' /* 90% */,
})

const StatisticSection = () => {
  return (
    <StatisticItems>
      <LogoSection />
      <TextSection />
      <BadgeSection />
    </StatisticItems>
  )
}

export default StatisticSection
