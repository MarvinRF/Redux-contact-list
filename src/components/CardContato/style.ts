import styled from 'styled-components'

export const CardContato = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-bottom: 24px;
  padding: 16px;
  background-color: #f1f1f1;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-decoration: none;

  @media (max-width: 992px) {
    width: 95%;
  }
`
export const Foto = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  margin-right: 5%;
`
export const Dados = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  li {
    margin-right: 1.1rem;
    margin-bottom: 4%;
  }

  @media (max-width: 992px) {
    width: 95%;
  }
`
export const CapsulaDados = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`

export const BotaoCancelarEDeletar = styled.button`
  border: none;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 1rem;
  img {
    max-width: 30px;
    max-height: 30px;
  }
`
export const BotaoEditar = styled(BotaoCancelarEDeletar)`
  img {
    max-width: 35px;
    max-height: 35px;
  }
`
