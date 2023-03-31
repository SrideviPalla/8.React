import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './about';
import Navbar from './navbar';

function App(){

  return(
<main>
<Routes>
<Route path = "/" Component={Home}/>
<Route path = "/about" Component={About}/>

</Routes>
<Navbar/>

</main>

  )

}

export default App;






