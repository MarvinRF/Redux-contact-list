import { Button } from './../../styles/index'
import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  gap: 16px;

  @media (max-width: 992px) {
    width: 95%;
    flex-direction: column;

    :nth-child(4) {
      margin-bottom: 16px;
    }
    Button {
      width: 100%;
    }
  }
`
export const FormRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 16px;

  @media (max-width: 992px) {
    margin-bottom: 8px;
  }
`

export const QuantidadeDeContatosSalvos = styled.div`
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  margin: 50px 0px;
  color: #666;
`
export const Icon = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`
