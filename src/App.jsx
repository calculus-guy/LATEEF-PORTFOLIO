import ReactDOM from 'react-dom';
import {About, Footer, Header, Skills, Testimonial, Work} from './container'
import { Navbar } from './components';
import './App.scss'
import './App.css'
function App() {

  return (
    <div className='app'>
      < Navbar />
      <Header />
      <About />
      <Testimonial />
      <Work />
      <Skills />
      <Footer />
    </div>
  )
}

export default App