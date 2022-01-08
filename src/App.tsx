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
import { useEffect } from 'react';

import jwt_decode from "jwt-decode";
import { LocalDataRepository } from './logic/Interfaces/LocalDataRepository';
import appConstants from './constants/app';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResetPasswordConfirmPage from './Pages/ResetPasswordConfirmPage';
import { DependencyContainer } from './logic/Interfaces/DependencyContainer';
import DoctorProfilePage from './Pages/DoctorProfilePage';
  


function App() {
  useEffect(() => {
    const dependencies = new DependencyContainer()
    const token =  dependencies.localDataRepository.get(appConstants.ACCESS_TOKEN_KEY);
    if(token){
      const decoded = jwt_decode(token);
      console.log(decoded);
      console.log("user" , decoded)
    }
    
  }, [])

  return (
    <Router>
        <Routes>
          <Route path={routes.home} element={<HomePage />} />
          <Route path={routes.chat} element={<ChatPage />} />
          <Route path={routes.login} element={<LoginPage />} />
          <Route path={routes.doctorProfile} element={<DoctorProfilePage />} />
          <Route path={routes.register} element={<RegisterPage />} />
          <Route path={routes.changePassword} element={<ChangePasswordPage />} />
          <Route path={routes.forgotPassword} element={<ForgotPasswordPage />} />
          <Route path={routes.resetPasswordConfirm} element={<ResetPasswordConfirmPage />} />
        </Routes>
        <ToastContainer />
    </Router>
  );
}

export default App;
