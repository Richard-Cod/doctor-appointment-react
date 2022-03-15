import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contact , Doctor, DoctorFeature , Message , User } from '../../logic/models'

export interface VoiceCallState {
  callingDoctor: Doctor| undefined,
}

const initialState: VoiceCallState = {
  callingDoctor: undefined,
}

export const voiceCallSlice = createSlice({
  name: 'voiceCall',
  initialState,
  reducers: {
    setCallingDoctor: (state, action: PayloadAction<Doctor>) => {
      state.callingDoctor = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCallingDoctor } = voiceCallSlice.actions

export default voiceCallSlice.reducer