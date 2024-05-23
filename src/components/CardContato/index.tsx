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

const Card = () => {
  return (
    <CardContato>
      <Foto src="https://github.com/MarvinRF.png" alt="Foto de perfil" />
      <ul>
        <CapsulaDados>
          <Dados>
            <li>Marvin</li>
            <li>991790938</li>
          </Dados>
          <Dados>
            <li>marvinvca@outlook.com</li>
            <li>MarvinRF</li>
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
