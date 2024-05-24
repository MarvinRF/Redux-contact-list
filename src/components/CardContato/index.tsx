import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  BotaoCancelarEDeletar,
  BotaoEditar,
  CapsulaDados,
  CardContato,
  Dados,
  Foto
} from './style'
import pen from '../../assets/pencil.png'
import trash from '../../assets/trash.png'
import ContatoClass from '../../models/Contato'
import { contactEdit, contactDelete } from '../../store/reducers/contatos'

type Props = ContatoClass

const Card = ({
  id,
  name: iname,
  email: iemail,
  link: ilink,
  tel: itel
}: Props) => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [link, setLink] = useState('')
  const [tel, setTel] = useState(0)
  const [estaEditando, setEstaEditando] = useState(false)

  useEffect(() => {
    if (iname.length > 0 && iemail.length > 0 && itel > 0 && ilink.length > 0) {
      setName(iname)
      setEmail(iemail)
      setTel(itel)
      setLink(ilink)
    }
  }, [iname, iemail, itel, ilink])

  const breakEdit = () => {
    setEstaEditando(false)
    setName(iname)
    setEmail(iemail)
    setTel(itel)
    setLink(ilink)
  }

  return (
    <CardContato>
      <Foto src={ilink + '.png'} alt="Foto de perfil" />
      <ul>
        <CapsulaDados>
          <Dados>
            <li>{iname}</li>
            <li>{itel}</li>
          </Dados>
          <Dados>
            <li>{iemail}</li>
            <li>{ilink.split('/')[ilink.split('/').length - 1]}</li>
          </Dados>
        </CapsulaDados>
      </ul>
      <BotaoEditar>
        <img src={pen} alt="editar" />
      </BotaoEditar>
      <BotaoCancelarEDeletar>
        <img src={trash} alt="Deletar" />
      </BotaoCancelarEDeletar>
    </CardContato>
  )
}

export default Card
