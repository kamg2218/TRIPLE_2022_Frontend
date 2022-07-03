import { keyframes } from '@stitches/react'

export const fadeIn = keyframes({
  '0%': {
    opacity: '0',
    transform: 'translate3d(0, 5%, 0)',
  },
  '70%': {
    opacity: '0.7',
  },
  '100%': {
    opacity: '1',
    transform: 'translateZ(0)',
  },
})
