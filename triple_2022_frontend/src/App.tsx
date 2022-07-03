import { styled } from '@stitches/react'

import StatisticSection from './components/StatisticSection'

const AppContent = styled('div', {
  alignItems: 'center',
  display: 'flex',
  height: '100vh',
  justifyContent: 'center',
  minWidth: '1200px',
  width: '100vw',
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
