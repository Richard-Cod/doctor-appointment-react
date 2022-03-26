import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { ChangePasswordPageVM, ChatPageVM, ChatWithDoctorPageVM, ChatWithPatientsVM, DashboardPageVM, DoctorProfilePageVM, ForgotPasswordConfirmPageVM, HomePageVM, LoginPageVM, RegisterPageVM, ResetPasswordConfirmPageVM, VideoCallPageVM, VoiceCallPageVM } from '../../logic/viewModels'

// Define a type for the slice state
interface ViewModelsState {
  changePasswordPageVM : ChangePasswordPageVM,
  chatPageVM : ChatPageVM,
  chatWithDoctorPageVM: ChatWithDoctorPageVM,
  chatWithPatientsPageVM: ChatWithPatientsVM,
  dashboardPageVM : DashboardPageVM,
  doctorProfilePageVM : DoctorProfilePageVM,
  ForgotPasswordConfirmPageVM : ForgotPasswordConfirmPageVM,
  homePageVM: HomePageVM,
  loginPageVM: LoginPageVM,
  registerPageVM : RegisterPageVM,
  resetPasswordConfirmPageVM : ResetPasswordConfirmPageVM,
  videoCallPageVM : VideoCallPageVM,
  voiceCallPageVM : VoiceCallPageVM,
  

}

// Define the initial state using that type
const initialState: ViewModelsState = {
  changePasswordPageVM: new ChangePasswordPageVM(),
  chatPageVM: new ChatPageVM(),
  chatWithDoctorPageVM: new ChatWithDoctorPageVM(),
  chatWithPatientsPageVM: new ChatWithPatientsVM(),


  dashboardPageVM: new DashboardPageVM(),
  doctorProfilePageVM: new DoctorProfilePageVM(),
  ForgotPasswordConfirmPageVM: new ForgotPasswordConfirmPageVM(),
  homePageVM: new HomePageVM(),
  loginPageVM: new LoginPageVM(),
  registerPageVM: new RegisterPageVM(),
  resetPasswordConfirmPageVM: new ResetPasswordConfirmPageVM(),
  videoCallPageVM: new VideoCallPageVM(),
  voiceCallPageVM: new VoiceCallPageVM()
}

export const viewModelsSlice = createSlice({
  name: 'viewmodels',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
  },
})


export const { } = viewModelsSlice.actions

export const selectChangePasswordPageVM = (state: RootState) => state.viewModels.changePasswordPageVM
export const selectChatPageVM = (state: RootState) => state.viewModels.chatPageVM

export const selectchatWithDoctorPageVM= (state: RootState) => state.viewModels.chatWithDoctorPageVM
export const selectchatWithPatientsPageVM = (state: RootState) => state.viewModels.chatWithPatientsPageVM

export const selectDashboardPageVM = (state: RootState) => state.viewModels.dashboardPageVM
export const selectDoctorProfilePageVM = (state: RootState) => state.viewModels.doctorProfilePageVM
export const selectForgotPasswordConfirmPageVM = (state: RootState) => state.viewModels.ForgotPasswordConfirmPageVM
export const selectHomePageVM = (state: RootState) => state.viewModels.homePageVM
export const selectLoginPageVM = (state: RootState) => state.viewModels.loginPageVM
export const selectRegisterPageVM = (state: RootState) => state.viewModels.registerPageVM
export const selectResetPasswordConfirmPageVM = (state: RootState) => state.viewModels.resetPasswordConfirmPageVM
export const selectVideoCallPageVM = (state: RootState) => state.viewModels.videoCallPageVM
export const selectVoiceCallPageVM = (state: RootState) => state.viewModels.voiceCallPageVM

export default viewModelsSlice.reducer