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
import save from '../../assets/visto.png'
import cancel from '../../assets/cancel.png'
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
          {estaEditando ? (
            <>
              <Dados>
                <li>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </li>
                <li>
                  <input
                    type="number"
                    value={tel}
                    onChange={(e) => setTel(Number(e.target.value))}
                  />
                </li>
              </Dados>
              <Dados>
                <li>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </li>
                <li>
                  <input
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                  />
                </li>
              </Dados>
            </>
          ) : (
            <>
              <Dados>
                <li>{iname}</li>
                <li>{itel}</li>
              </Dados>
              <Dados>
                <li>{iemail}</li>
                <li>{ilink.split('/')[ilink.split('/').length - 1]}</li>
              </Dados>
            </>
          )}
        </CapsulaDados>
      </ul>
      {estaEditando ? (
        <>
          <BotaoEditar
            onClick={() => {
              dispatch(contactEdit({ name, tel, email, link, id }))
              setEstaEditando(false)
            }}
          >
            <img src={save} alt="Salvar Edição" />
          </BotaoEditar>
          <BotaoCancelarEDeletar onClick={breakEdit}>
            <img src={cancel} alt="Cancelar Edição" />
          </BotaoCancelarEDeletar>
        </>
      ) : (
        <>
          <BotaoEditar onClick={() => setEstaEditando(true)}>
            <img src={pen} alt="Editar Contato" />
          </BotaoEditar>
          <BotaoCancelarEDeletar onClick={() => dispatch(contactDelete(id))}>
            <img src={trash} alt="Excluir Contato" />
          </BotaoCancelarEDeletar>
        </>
      )}
    </CardContato>
  )
}

export default Card
