import * as S from './styles'
import { Button, Campo } from '../../styles'

import usuario from '../../assets/user.png'
import github from '../../assets/github.png'
import telefone from '../../assets/phone.png'
import email from '../../assets/email.png'

const Formulario = () => {
  return (
    <>
      <S.Form>
        <S.FormRow>
          <S.Icon src={usuario} alt="pessoa" />
          <Campo type="text" placeholder="Nome" required></Campo>
        </S.FormRow>
        <S.FormRow>
          <S.Icon src={telefone} alt="pessoa" />
          <Campo type="tel" placeholder="Telefone" required></Campo>
        </S.FormRow>
        <S.FormRow>
          <S.Icon src={email} alt="pessoa" />
          <Campo type="email" placeholder="E-mail" required></Campo>
        </S.FormRow>
        <S.FormRow>
          <S.Icon src={github} alt="pessoa" />
          <Campo type="url" placeholder="Github"></Campo>
        </S.FormRow>
        <Button>Adicionar</Button>
      </S.Form>
    </>
  )
}

export default Formulario
