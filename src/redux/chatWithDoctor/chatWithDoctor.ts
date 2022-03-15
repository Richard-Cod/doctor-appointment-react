import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contact ,Message,User } from '../../logic/models'

// export interface UserWrittingState {
//   user : User | undefined,
// }

export interface ChatWithDoctorState {
  contacts: Contact[] | undefined,
  contactsFiltered: Contact[] | undefined,
  currentChattingUser : User | undefined,
  contactMessages : Message[] | undefined,
  writtingUserId : number | undefined
}

const initialState: ChatWithDoctorState = {
  contacts: undefined,
  contactsFiltered: undefined,
  currentChattingUser: undefined,
  contactMessages : undefined,
  writtingUserId : undefined
}

export const chatWithDoctorSlice = createSlice({
  name: 'chatWithDoctor',
  initialState,
  reducers: {
    setContacts: (state, action: PayloadAction<Contact[]>) => {
      state.contacts = action.payload
      state.contactsFiltered = action.payload
    },
    setContactsFiltered: (state, action: PayloadAction<Contact[]>) => {
      state.contactsFiltered = action.payload
    },
    setCurrentChattingUser: (state, action: PayloadAction<User>) => {
      state.currentChattingUser = action.payload
    },
    setContactMessage: (state, action: PayloadAction<Message[]>) => {
      state.contactMessages = action.payload
    },
    addNewMessage: (state, action: PayloadAction<Message>) => {
      if(state.contactMessages?.find(value => value.id === action.payload.id)) return
      state.contactMessages?.push(action.payload)
    },
    setWrittingUserId: (state, action: PayloadAction<number | undefined>) => {
      state.writtingUserId = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
  setContacts , 
  setContactsFiltered ,
  setCurrentChattingUser ,
  setContactMessage,
  addNewMessage,
  setWrittingUserId
} = chatWithDoctorSlice.actions

export default chatWithDoctorSlice.reducer