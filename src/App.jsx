import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Games from './pages/Games'
import Software from './pages/Software'
import About from './pages/About'
import Links from './pages/Links'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games wipImage="/NoahnatorLogoWarningColor.png" wipImageWidth="200px" bannerSrc="/banner-games.mp4" />} />
          <Route path="/software" element={<Software />} />
          <Route path="/about" element={<About />} />
          <Route path="/links" element={<Links />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
