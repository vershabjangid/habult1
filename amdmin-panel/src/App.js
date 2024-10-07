import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login/Login';
import { Forgot_Password } from './pages/login/Forgot_Password';
import { Otp } from './pages/login/Otp';
import { New_Password } from './pages/login/New_Password';
import { Dashboard } from './pages/webpages/Dashboard';
import { All_Pages } from './pages/webpages/All pages/All_Pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/forgot-password' element={<Forgot_Password />} />
          <Route path='/otp-page' element={<Otp />} />
          <Route path='/new-password' element={<New_Password />} />

          <Route path='/dashboard' element={<Dashboard/> } />
          <Route path='/webpage/pages' element={<All_Pages/> } />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
