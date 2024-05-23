import { useState } from 'react'
import './App.css'
import Header from './Componenets/Header'
import Ideas from './Componenets/Ideas'
import Skelotons from './Componenets/Skelotons'
import WorkingPages from './Componenets/WorkingPages'
import Compleated from './Componenets/Compleated'
import Footer from './Componenets/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
          <Header/>
      <div className='flex min-h-full min-w-full'>
      <Ideas/>
      <Skelotons/>
      <WorkingPages/>
      <Compleated/>
      </div>
      <Footer/>
    

    </section>
  )
}

export default App
