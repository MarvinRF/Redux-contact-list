import * as S from './styles'
import { Button, Campo } from '../../styles'

import usuario from '../../assets/user.png'
import github from '../../assets/github.png'
import telefone from '../../assets/phone.png'
import emailpic from '../../assets/email.png'
import { addContact } from '../../store/reducers/contatos'
import { useDispatch, useSelector } from 'react-redux'
import { FormEvent, SetStateAction, useState } from 'react'
import { RootReducer } from '../../store'

const Formulario = () => {
  const dispatch = useDispatch()
  const { contatos } = useSelector((state: RootReducer) => state.contatos)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [link, setLink] = useState('')
  const [tel, setTel] = useState(0)

  const adicionarContato = (event: FormEvent) => {
    event.preventDefault()

    dispatch(
      addContact({
        name,
        email,
        link,
        tel
      })
    )

    setName('')
    setEmail('')
    setLink('')
    setTel(0)
  }
  return (
    <>
      <S.Form onSubmit={adicionarContato}>
        <S.FormRow>
          <S.Icon src={usuario} alt="pessoa" />
          <Campo
            type="text"
            value={name}
            placeholder="Nome"
            onChange={(event: { target: { value: SetStateAction<string> } }) =>
              setName(event.target.value)
            }
            required
          ></Campo>
        </S.FormRow>
        <S.FormRow>
          <S.Icon src={telefone} alt="pessoa" />
          <Campo
            type="tel"
            value={tel}
            placeholder="Telefone"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const inputValue = event.target.value
              const numericValue = parseInt(inputValue, 10)

              if (!isNaN(numericValue)) {
                setTel(numericValue)
              } else if (inputValue === '') {
                setTel(0)
              }
            }}
            required
          ></Campo>
        </S.FormRow>
        <S.FormRow>
          <S.Icon src={emailpic} alt="pessoa" />
          <Campo
            type="email"
            value={email}
            placeholder="E-mail"
            onChange={(event: { target: { value: SetStateAction<string> } }) =>
              setEmail(event.target.value)
            }
            required
          ></Campo>
        </S.FormRow>
        <S.FormRow>
          <S.Icon src={github} alt="pessoa" />
          <Campo
            type="url"
            value={link}
            placeholder="Github"
            onChange={(event: { target: { value: SetStateAction<string> } }) =>
              setLink(event.target.value)
            }
            required
          ></Campo>
        </S.FormRow>
        <Button>Adicionar</Button>
      </S.Form>
    </>
  )
}

export default Formulario
