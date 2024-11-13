import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./pages/web/Landing";
import { About } from "./pages/web/About";
import { TermsCondition } from "./pages/web/TermsCondition";
import { Privacy } from "./pages/web/Privacy";
import { Disclaimer } from "./pages/web/Disclaimer";
import { Faqpage } from "./pages/web/Faqpage";
import { Error } from "./pages/Error";
import { RegisterPage } from "./pages/web/RegisterPage";
import { Register_otp } from "./pages/web/Register_otp";
import { RegisterForm } from "./pages/web/RegisterForm";
import { Private } from "./pages/web/Private";
import { Startups } from "./pages/web/Startups";
import { Login } from "./pages/web/Login";
import { Forgot } from "./pages/web/Forgot";
import { OTP } from "./pages/web/OTP";
import { Loginnew_Private } from "./pages/web/Loginnew_Private";
import { New_Password } from "./pages/web/New_Password";
import { StartupRegister } from "./pages/web/StartupRegister";
import { InvestorRegister } from "./pages/web/InvestorRegister";
import { LoginPrivate } from "./pages/web/LoginPrivate";
import { StartupInfo } from "./pages/web/StartupInfo";
import { RegisterPassword } from "./pages/web/RegisterPassword";
import { InvestorRegister2 } from "./pages/web/InvestorRegister2";
import { BankVerification } from "./pages/web/BankVerification";
import { Payment } from "./pages/web/Payment";
import { RegisterForm2 } from "./pages/web/RegisterForm2";
import { Dashboard } from "./pages/web/Dashboard";
import { Startupecosystem } from "./pages/web/Startupecosystem";
import { DashboardPanel } from "./pages/web/DashboardPanel";
import { Team } from "./pages/web/Team";
import { ViewStartup_Profile } from "./pages/web/ViewStartup_Profile";
import { ViewMember_profile } from "./pages/web/ViewMember_profile";
import { Industry } from "./pages/web/Industry";
import { View_Team } from "./pages/web/View_Team";
import { ViewTeaminfo } from "./pages/web/ViewTeaminfo";
import { UpdateTeam } from "./pages/web/UpdateTeam";
import { VIew_startup_requests } from "./pages/web/VIew_startup_requests";
import { View_member_request } from "./pages/web/View_member_request";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />

          {/* static page  */}
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<TermsCondition />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/faq" element={<Faqpage />} />


          <Route path="/startups-ecosystem" element={<Startupecosystem />} />

          <Route path="/login" element={<Login />} />
          <Route element={<LoginPrivate />}>
            <Route path="/startups" element={<Startups />} />
            <Route path="/startups-info" element={<StartupInfo />} />
          </Route>



          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/otp-verification" element={<OTP />} />


          <Route element={<Loginnew_Private />}>
            <Route path="/new-password" element={<New_Password />} />
          </Route>

          <Route path="/register" element={<RegisterPage />} />
          <Route path="/register2" element={<RegisterPassword />} />
          <Route path="/register-otp" element={<Register_otp />} />
          <Route element={<Private />}>
            <Route path="/register-form" element={<RegisterForm />} />
            <Route path="/create-startup-profile" element={<RegisterForm2 />} />
            <Route path="/member-register" element={<InvestorRegister />} />
            <Route path="/investor-2" element={<InvestorRegister2 />} />
            <Route path="/startup-success" element={<StartupRegister />} />
            <Route path="/membership-plans" element={<Payment />} />
            <Route path="/bank-verification" element={<BankVerification />} />
          </Route>

          <Route path="*" element={<Error />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard-panel" element={<DashboardPanel />} />
          <Route path="/team" element={<Team />} />
          <Route path="/view-team" element={<View_Team />} />
          <Route path="/view-team-info" element={<ViewTeaminfo />} />
          <Route path="/update-team" element={<UpdateTeam />} />

          <Route path="/view-startup-profile" element={<ViewStartup_Profile />} />
          <Route path="/startup-requests" element={<VIew_startup_requests />} />
          <Route path="/member-requests" element={<View_member_request />} />
          <Route path="/view-member-profile" element={<ViewMember_profile />} />
          <Route path="/industry" element={<Industry />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
