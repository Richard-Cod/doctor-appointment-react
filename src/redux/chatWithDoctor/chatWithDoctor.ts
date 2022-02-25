import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contact } from '../../logic/models/Contact'
import { Message } from '../../logic/models/Message'
import { User } from '../../logic/models/User'

export interface ChatWithDoctorState {
  contacts: Contact[] | undefined,
  contactsFiltered: Contact[] | undefined,
  currentChattingUser : User | undefined,
  contactMessages : Message[] | undefined,
}

const initialState: ChatWithDoctorState = {
  contacts: undefined,
  contactsFiltered: undefined,
  currentChattingUser: undefined,
  contactMessages : undefined
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
  },
})

// Action creators are generated for each case reducer function
export const { setContacts , setContactsFiltered , setCurrentChattingUser ,setContactMessage} = chatWithDoctorSlice.actions

export default chatWithDoctorSlice.reducer