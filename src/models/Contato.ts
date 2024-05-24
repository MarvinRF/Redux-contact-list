class Contato {
  id: number
  name: string
  tel: number
  email: string
  link: string

  constructor(
    id: number,
    name: string,
    tel: number,
    email: string,
    link: string
  ) {
    this.id = id
    this.name = name
    this.tel = tel
    this.email = email
    this.link = link
  }
}

export default Contato
