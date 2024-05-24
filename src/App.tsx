import { ICardProps } from './components/CardContato'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListaDeContatos from './components/ListaDeContatos'
import EstiloGlobal, { BodyContainer, Container } from './styles'

const lista: ICardProps[] = [
  {
    email: 'marvinva',
    link: 'https://github.com/MarvinRF',
    nome: 'MARVIN',
    tel: 9846213
  },
  {
    email: 'marvinva',
    link: 'https://github.com/MarvinRF',
    nome: 'MARVIN',
    tel: 9846213
  }
]

function App() {
  return (
    <>
      <EstiloGlobal />
      <BodyContainer>
        <Header />
        <Container>
          <Formulario />
          <ListaDeContatos lista={lista} />
        </Container>
      </BodyContainer>
    </>
  )
}

export default App
