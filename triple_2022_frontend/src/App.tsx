import { styled } from '@stitches/react'

import StatisticSection from './components/StatisticSection'

const AppContent = styled('div', {
  width: '100vw',
  height: '100vh',
  minWidth: '1200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
const MainContent = styled('div', {
  minHeight: '450px',
  width: '100%',
})

function App() {
  return (
    <AppContent>
      <MainContent>
        <StatisticSection />
      </MainContent>
    </AppContent>
  )
}
export default App
