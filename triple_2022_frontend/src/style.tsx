import { keyframes } from '@stitches/react'

export const fadeInUp = keyframes({
  '0%': {
    opacity: '0',
    transform: 'translate3d(0, 5%, 0)',
  },
  '100%': {
    opacity: '1',
    transform: 'translateZ(0)',
  },
})
