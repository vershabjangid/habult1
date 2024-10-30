import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login/Login';
import { Dashboard } from './pages/webpages/Dashboard';
import { All_Pages } from './pages/webpages/All pages/All_Pages';
import { PrivateRoute } from './pages/login/PrivateRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route element={<PrivateRoute/>}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/webpage/pages' element={<All_Pages />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
