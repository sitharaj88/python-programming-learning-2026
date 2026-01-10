import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Phase from './pages/Phase'
import Post from './pages/Post'
import './index.css'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/python-programming-learning-2026">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="phase/:phaseId" element={<Phase />} />
            <Route path="post/:postId" element={<Post />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
