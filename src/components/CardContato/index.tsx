import React from 'react'
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

export interface ICardProps {
  link: string
  nome: string
  tel: number
  email: string
}

const Card = ({ link, nome, tel, email }: ICardProps) => {
  return (
    <CardContato>
      <Foto src={link + '.png'} alt="Foto de perfil" />
      <ul>
        <CapsulaDados>
          <Dados>
            <li>{nome}</li>
            <li>{tel}</li>
          </Dados>
          <Dados>
            <li>{email}</li>
            <li>{link}</li>
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
