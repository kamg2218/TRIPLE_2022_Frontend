import { styled } from '@stitches/react'

import LogoSection from './LogoSection'
import TextSection from './TextSection'
import AwardSection from './AwardSection'

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
      <AwardSection />
    </StatisticItems>
  )
}

export default StatisticSection
