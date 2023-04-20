import './App.css';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Contact from './Component/Contact';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Create from './Component/Create';
import Home from './Component/Home';
import Update from './Component/Update';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/update/:id' element={<Update/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
