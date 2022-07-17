import './styles/styles.scss';
import {BrowserRouter,Route, Routes} from "react-router-dom";
//Pages
import SignUp from './pages/signup';
import LogIn from './pages/login';
import MainBoard from './pages/board';
import Home from './pages/home';
//componets
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
     <NavBar />
      <Routes>
        <Route path= "/signUp" element={<SignUp />}/>
        <Route path= "/logIn" element={<LogIn />}/>
        <Route path= "/board" element={<MainBoard />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;


