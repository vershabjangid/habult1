import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Forgot_Password } from './pages/Login/Forgot_Password';
import { Otp_Page } from './pages/Login/Otp_Page';
import { Change_Password } from './pages/Login/Change_Password';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/forgot-password' element={<Forgot_Password/>}/>
          <Route path='/otp' element={<Otp_Page/>}/>
          <Route path='/change-password' element={<Change_Password/>}/> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
