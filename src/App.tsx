import { useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import {
  HomePage,
  ChatPageWithDoctor,
  ChatPageWithPatients,
  LoginPage,
  DoctorProfilePage,
  RegisterPage,
  ChangePasswordPage,
  ForgotPasswordPage,
  ResetPasswordConfirmPage
} from './Pages'

import ROUTES from './constants/routes';
import appConstants from './constants/app';

import { DependencyContainer } from './logic/Interfaces/DependencyContainer';
import { setUser } from './redux/user/userSlice';
import { User } from './logic/models/User';
import HomePageVM from './logic/viewModels/HomePageVM';
import { useAppDispatch } from './app/hooks';
  
const homePageVM = new HomePageVM()

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const asyncFunc = async() =>{
    const dependencies = new DependencyContainer()
    const token =  dependencies.localDataRepository.get(appConstants.ACCESS_TOKEN_KEY);
      if(token){
        // const decoded = jwt_decode(token);
        const user = await homePageVM.getLoggedInUser()
        dispatch(setUser(user))
      }
    }
    asyncFunc()
  }, [])

  return (
    <Router>
        <Routes>
          <Route path={ROUTES.home} element={<HomePage />} />
          <Route path={ROUTES.chat} element={<ChatPageWithDoctor />} />
          <Route path={ROUTES.chatWithPatients} element={<ChatPageWithPatients />} />
          <Route path={ROUTES.login} element={<LoginPage />} />
          <Route path={ROUTES.doctorProfile} element={<DoctorProfilePage />} />
          <Route path={ROUTES.register} element={<RegisterPage />} />
          <Route path={ROUTES.changePassword} element={<ChangePasswordPage />} />
          <Route path={ROUTES.forgotPassword} element={<ForgotPasswordPage />} />
          <Route path={ROUTES.resetPasswordConfirm} element={<ResetPasswordConfirmPage />} />
        </Routes>
        <ToastContainer />
    </Router>
  );
}

export default App;
