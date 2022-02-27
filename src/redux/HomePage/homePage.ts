import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contact , DoctorFeature , Message , User } from '../../logic/models'

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