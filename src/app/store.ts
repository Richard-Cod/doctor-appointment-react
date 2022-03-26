import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../redux/counter/counterSlice'
import userReducer  from './../redux/user/userSlice';
import chatWithDoctorReducer from './../redux/chatWithDoctor/chatWithDoctor';
import HomePageReducer from './../redux/HomePage/homePage';
import VoiceCallReducer from './../redux/voiceCallPage/voiceCall';
import VideoCallReducer from './../redux/videoCallPage/videoCall';
import viewModelsReducer from './../redux/viewmodels/viewmodels';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    chatWithDoctor: chatWithDoctorReducer,
    homePage: HomePageReducer,
    voiceCall: VoiceCallReducer,
    videoCall: VideoCallReducer,
    viewModels : viewModelsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
