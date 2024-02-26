import { Outlet } from "react-router-dom"
import NavBar from './components/NavBar'
import './App.css'

function App() {

  return (
    <>
      <header>
        <NavBar />               
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h3>Super footer</h3>
      </footer>
    </>
  )
}

export default App
