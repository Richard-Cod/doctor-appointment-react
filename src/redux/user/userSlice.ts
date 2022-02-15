import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../logic/models/User'

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
    setUser: (state) => {
        const user : User = {
            email: "richard.bathiebo@gmail.com",
            gender: "Male",
            first_name: "Richard",
            last_name: "Bathiebo",
            profile_pic: "",
            user_id: 1
        }
      state.value = user 
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer