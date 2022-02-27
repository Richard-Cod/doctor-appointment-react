import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../logic/models'

export interface UserState {
  value: User | null
}

const initialState: UserState = {
  value: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state , action: PayloadAction<User>) => {
      const {email,gender,first_name,last_name,profile_pic,id} = action.payload
        const user : User = {
            email,
            gender,
            first_name,
            last_name,
            profile_pic,
            id
        }
      state.value = user 
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer