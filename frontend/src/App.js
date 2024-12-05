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
import { MemberTerms } from './pages/web/Login/MemberTerms';
import { MemberKyc } from './pages/web/Login/MemberKyc';
import { MemberBankVerification } from './pages/web/Login/MemberBankVerification';
import { RegestConfirmed } from './pages/web/Login/RegestConfirmed';
import { StartupForm } from './pages/web/Login/StartupForm';
import { StartupLogin2 } from './pages/web/Login/StartupLogin2';
import { DashIndustry } from './pages/dashboard/DashIndustry';
import { UpdateDashIndustry } from './pages/dashboard/UpdateDashIndustry';
import { DashFaq } from './pages/dashboard/DashFaq';
import { UpdateDashFaq } from './pages/dashboard/UpdateDashFaq';
import { DashRequests } from './pages/dashboard/DashRequests';

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
          <Route path='/member-terms' element={<MemberTerms />} />
          <Route path='/member-kyc' element={<MemberKyc />} />
          <Route path='/member-bank-verification' element={<MemberBankVerification />} />
          <Route path='/startup-form' element={<StartupForm />} />
          <Route path='/startup-form2' element={<StartupLogin2 />} />
          <Route path='/request-confirmed' element={<RegestConfirmed />} />

          {/* website */}
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          {/* Dashboard */}
          <Route path='/dashboard-login' element={<DashboardLogin />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/home' element={<DashHome />} />
          <Route path='/industry' element={<DashIndustry />} />
          <Route path='/update-industry' element={<UpdateDashIndustry />} />
          <Route path='/faq' element={<DashFaq />} />
          <Route path='/update-faq' element={<UpdateDashFaq />} />
          <Route path='/requests' element={<DashRequests />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
