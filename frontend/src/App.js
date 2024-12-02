import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Landing } from './pages/web/Landing';
import { DashboardLogin } from './pages/dashboard/DashboardLogin';
import { Dashboard } from './pages/dashboard/Dashboard';
import { DashHome } from './pages/dashboard/DashHome';
import { AboutUs } from './pages/web/AboutUs';
import { ContactUs } from './pages/web/ContactUs';
import { Login } from './pages/web/Login/Login';
import { Register } from './pages/web/Login/Register';
import { Register2 } from './pages/web/Login/Register2';
import { RegisterOtp } from './pages/web/Login/RegisterOtp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* login */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/register2' element={<Register2 />} />
          <Route path='/register-otp' element={<RegisterOtp />} />

          {/* website */}
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/Contact-Us' element={<ContactUs />} />
          {/* Dashboard */}
          <Route path='/dashboard-login' element={<DashboardLogin />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/home' element={<DashHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
