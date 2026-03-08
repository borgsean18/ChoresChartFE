import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import ForgotPassword from './pages/forgotPassword/forgotPassword';
import Dashboard from './pages/dashboard/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
