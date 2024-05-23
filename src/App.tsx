import Formulario from './components/Formulario'
import Header from './components/Header'
import ListaDeContatos from './components/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Container>
        <Formulario />
        <ListaDeContatos />
      </Container>
    </>
  )
}

export default App
