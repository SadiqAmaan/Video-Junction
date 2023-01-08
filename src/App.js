import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Upload from './components/Upload';
import Home from './pages/Home';
import Videos from './pages/Videos';






function App() {
  return (
   <Router>
   <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/videos' element={<Videos/>} />
      <Route path='/upload' element={<Upload/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />

     
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
