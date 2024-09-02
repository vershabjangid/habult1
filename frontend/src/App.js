import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Forgot_Password } from './pages/Login/Forgot_Password';
import { Otp_Page } from './pages/Login/Otp_Page';
import { Change_Password } from './pages/Login/Change_Password';
import { Register } from './pages/Login/Register';
import { Register_otp } from './pages/Login/Register_otp';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/forgot-password' element={<Forgot_Password/>}/>
          <Route path='/otp' element={<Otp_Page/>}/>
          <Route path='/change-password' element={<Change_Password/>}/>
          <Route path='/register' element={<Register/>}/> 
          <Route path='/register-otp' element={<Register_otp/>}/> 
          <Route path='/home' element={<Home/>}/> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
