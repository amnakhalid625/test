import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from './pages/home/Home'
import About from "./pages/about/About"
import Contact from './pages/contact/Contact'
import Navbar from './components/Navbar'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Storage from './components/StorageText'
const App = () => {
  return (
    <BrowserRouter>
<Navbar />
    
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/storage" element={<Storage />}/>




    </Routes>
    </BrowserRouter>
  )
}

export default App
