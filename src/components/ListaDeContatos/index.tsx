/* eslint-disable react/jsx-key */
import { useSelector } from 'react-redux'
import Card from '../CardContato'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state.contatos)

  return (
    <ul>
      {contatos.map(
        (contact: {
          tel: number
          email: string
          id: number
          name: string
          link: string
        }) => (
          <Card
            id={contact.id}
            name={contact.name}
            email={contact.email}
            tel={contact.tel}
            link={contact.link}
          />
        )
      )}
    </ul>
  )
}
export default ListaDeContatos
