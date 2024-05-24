import React from 'react'
import Card from '../CardContato'

interface IListaProps {
  lista: Array<{
    link: string
    nome: string
    tel: number
    email: string
  }>
}

const ListaDeContatos = (props: IListaProps) => {
  return (
    <>
      {props.lista.map((e, i) => {
        return <Card {...e} key={i} />
      })}
    </>
  )
}

export default ListaDeContatos
