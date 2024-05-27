import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  contatos: Contato[]
}

const initialState: ContatosState = {
  contatos: [
    {
      id: 1,
      name: 'Marvin',
      email: 'marvin@email.com',
      tel: 7536435000,
      link: 'https://github.com/MarvinRF'
    },
    {
      id: 2,
      name: 'Marcos',
      email: 'marcos@email.com',
      tel: 7536434000,
      link: 'https://github.com/marcosVitorCoelho'
    },
    {
      id: 3,
      name: 'Davi',
      email: 'davi@email.com',
      tel: 7536432000,
      link: 'https://github.com/DaviCarvalho34'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'Contatos',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contactChecker = state.contatos.find(
        (contato) =>
          contato.name.toLowerCase() === action.payload.name.toLowerCase()
      )
      if (contactChecker) {
        alert('este contato já existe na sua lista de contatos.')
      } else {
        const lastContact = state.contatos[state.contatos.length - 1]

        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.contatos.push(newContact)
      }
    },
    contactDelete: (state, action: PayloadAction<number>) => {
      state.contatos = state.contatos.filter(
        (contato) => contato.id !== action.payload
      )
    },
    contactEdit: (state, action: PayloadAction<Contato>) => {
      const contactIndex = state.contatos.findIndex(
        (contato) => contato.id === action.payload.id
      )
      if (contactIndex >= 0) {
        state.contatos[contactIndex] = action.payload
      }
    }
  }
})

export const { addContact, contactEdit, contactDelete } = contatosSlice.actions

export default contatosSlice.reducer
