import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contact , Message , User } from '../../logic/models'

export interface ChatWithPatientState {
  contacts: Contact[] | undefined,
  contactsFiltered: Contact[] | undefined,
  currentChattingUser : User | undefined,
  contactMessages : Message[] | undefined,
}

const initialState: ChatWithPatientState = {
  contacts: undefined,
  contactsFiltered: undefined,
  currentChattingUser: undefined,
  contactMessages : undefined
}

export const chatWithPatientSlice = createSlice({
  name: 'chatWithPatient',
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
      state.contactMessages?.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { setContacts , setContactsFiltered ,
   setCurrentChattingUser ,setContactMessage,
   addNewMessage} = chatWithPatientSlice.actions

export default chatWithPatientSlice.reducer