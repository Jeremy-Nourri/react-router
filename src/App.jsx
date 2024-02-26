import { Outlet } from "react-router-dom"
import './App.css'
import { useState } from "react"
import { data } from "./data/data"

function App() {

  const [contacts, setContacts] = useState(data);

  return (
    <>
      <header>              
      </header>
      <main>
        <Outlet context={[contacts, setContacts]}/>
        
      </main>
    </>
  )
}

export default App
