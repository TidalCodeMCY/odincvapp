import { useState } from 'react'
import './App.css'

function App() {
  const [document, setDocument] = useState({ first:'Mason', last:'Yates', education:'Self Taught', eduDetails: 'I spent a few years teaching myself how to code in js react and node. My goal was to eventually get a job as a web developer to show that being self taught can work.', job1: 'Freelancing for upwork.', job1Desription: 'I learned how to make basic webpages and did some work for upwork to try to get practice and increase my skills.'})
  return (
    <>
      <header>
          <h1>${document.first} ${document.last} CV Form</h1>
          <button>Menu</button>
      </header>
      <main>
          
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
