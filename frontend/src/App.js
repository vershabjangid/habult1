import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./pages/web/Landing";
import { About } from "./pages/web/About";
import { TermsCondition } from "./pages/web/TermsCondition";
import { Privacy } from "./pages/web/Privacy";
import { Disclaimer } from "./pages/web/Disclaimer";
import { Faqpage } from "./pages/web/Faqpage";
import { Error } from "./pages/Error";
import { RegisterPage } from "./pages/login/RegisterPage";
import { Register_otp } from "./pages/login/Register_otp";
import { RegisterForm } from "./pages/login/RegisterForm";
import { Private } from "./pages/login/Private";

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



           {/* <Route path="/startups" element={<Startups />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/otp-verification" element={<OTP />} />
          <Route element={<Loginnew_Private />}>
          <Route path="/new-password" element={<New_Password />} />
          </Route> */}

          <Route element={<Private />}>
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/register-otp" element={<Register_otp />} />
            <Route path="/register-form" element={<RegisterForm />} />
          </Route>

          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
