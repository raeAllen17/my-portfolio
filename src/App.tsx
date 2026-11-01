import './index.css'
import Header from './pages/Header'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import TechStack from './pages/TechStack'
import Contact from './pages/Contact'
import Background from './components/Background'

function App() {
  return (
    <>
      <Background />
      <main className="relative min-h-screen">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
          <Header />
          <Experience />
          <Projects />
          <TechStack />
          <Contact />
          <footer className="py-12 text-sm text-[#6b6b6b]">
            <p>© {new Date().getFullYear()} Rae Allen Retuta</p>
          </footer>
        </div>
      </main>
    </>
  )
}

export default App
