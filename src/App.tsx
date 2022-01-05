import './App.css';
import ChatPage from './Pages/ChatPage';
import HomePage from './Pages/HomePage/HomePage';
import RegisterPage from './Pages/RegisterPage';


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import routes from './constants/routes';
import ChangePasswordPage from './Pages/ChangePasswordPage';
import ForgotPasswordPage from './Pages/ForgetPasswordPage';



function App() {
  return (
    <Router>
        <Routes>
          <Route path={routes.home} element={<HomePage />} />
          <Route path={routes.chat} element={<ChatPage />} />
          <Route path={routes.login} element={<LoginPage />} />
          <Route path={routes.register} element={<RegisterPage />} />
          <Route path={routes.changePassword} element={<ChangePasswordPage />} />
          <Route path={routes.forgotPassword} element={<ForgotPasswordPage />} />
        </Routes>
    </Router>
  );
}

export default App;
