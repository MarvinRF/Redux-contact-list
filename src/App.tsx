import { Provider } from 'react-redux'
import EstiloGlobal, { BodyContainer, Container } from './styles'

import Formulario from './components/Formulario'
import Header from './components/Header'
import ListaDeContatos from './components/ListaDeContatos'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <BodyContainer>
        <Header />
        <Container>
          <Formulario />
          <ListaDeContatos />
        </Container>
      </BodyContainer>
    </Provider>
  )
}

export default App
