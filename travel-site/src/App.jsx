

import './App.css'
import Footer from './Components/Footer';
import Header from './Components/Header/Header'
// import Memories from './Components/Memories/Memories'
import Nav from './Components/Nav/Nav'
import Trips from './Components/Trips/Trips'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {


  return (
    <>
    <div className='main'>
    <Nav/>
    <Header/>
    {/* <Memories/> */}
    
    </div>
    <Trips/>
     
    <Footer/>
    
    </>
  )
}

export default App
