import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contact } from '../../logic/models/Contact'
import { DoctorFeature } from '../../logic/models/DoctorFeature'
import { Message } from '../../logic/models/Message'
import { User } from '../../logic/models/User'

export interface ChatWithDoctorState {
  features: DoctorFeature[] | undefined,
}

const initialState: ChatWithDoctorState = {
  features: undefined,
}

export const chatWithDoctorSlice = createSlice({
  name: 'chatWithDoctor',
  initialState,
  reducers: {
    setFeatures: (state, action: PayloadAction<DoctorFeature[]>) => {
      state.features = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setFeatures } = chatWithDoctorSlice.actions

export default chatWithDoctorSlice.reducer