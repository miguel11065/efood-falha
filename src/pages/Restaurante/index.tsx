import HeaderRestaurante from '../../components/HeaderRestaurante'
import ListaPratos from '../../components/ListaPratos'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export type Prato = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type PratosAPI = {
  cardapio?: Prato[]
}

const Pratos = () => {
  const { id } = useParams()

  const [lista, setLista] = useState<PratosAPI[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setLista(res))
  }, [id])

  // if (!lista) {
  //   return <h3>Carregando...</h3>
  // }

  return (
    <>
      <HeaderRestaurante />
      <ListaPratos pratos={lista} />
    </>
  )
}

export default Pratos
