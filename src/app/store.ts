import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../redux/counter/counterSlice'
import userReducer  from './../redux/user/userSlice';
import chatWithDoctorReducer from './../redux/chatWithDoctor/chatWithDoctor';
import HomePageReducer from './../redux/HomePage/homePage';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    chatWithDoctor: chatWithDoctorReducer,
    homePage: HomePageReducer
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
