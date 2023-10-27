import ListasRestaurantes from '../../components/ListasRestaurantes'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'

export type RestaurantesAPI = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string[]
  avaliacao: number
  descricao: string
  capa: string
}

const Home = () => {
  const [lista, setLista] = useState<RestaurantesAPI[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setLista(res))
  }, [])

  return (
    <>
      <Header />
      <ListasRestaurantes restaurante={lista} />
    </>
  )
}

export default Home
