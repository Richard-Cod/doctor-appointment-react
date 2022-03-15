import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contact , Doctor, DoctorFeature , Message , User } from '../../logic/models'

export interface VideoCallState {
  callingDoctor: Doctor| undefined,
}

const initialState: VideoCallState = {
  callingDoctor: undefined,
}

export const voiceCallSlice = createSlice({
  name: 'voiceCall',
  initialState,
  reducers: {
    setCallingVideoDoctor: (state, action: PayloadAction<Doctor>) => {
      state.callingDoctor = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCallingVideoDoctor } = voiceCallSlice.actions

export default voiceCallSlice.reducer