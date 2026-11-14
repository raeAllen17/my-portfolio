import './index.css'
import Rail from './components/Rail'
import Hero from './pages/Hero'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import TechStack from './pages/TechStack'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="page">
        <Rail />

        <main className="main" id="main" tabIndex={-1}>
          <div className="main-inner">
            <Hero />
            <Projects />
            <Experience />
            <TechStack />
            <Contact />

            <footer className="site-footer">
              <p>© {new Date().getFullYear()} Rae Allen Retuta</p>
            </footer>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
