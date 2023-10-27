import {
  Avaliacao,
  AvaliacaoContainer,
  Botao,
  Card,
  CardContainer,
  Descricao,
  Imagem,
  Tag,
  Titulo,
  TituloContainer
} from './styles'
import estrela from '../../assets/images/estrela.svg'
import { Link } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import { RestaurantesAPI } from '../../pages/Home'
// import { PratosAPI } from '../../pages/Restaurante'

type Props = {
  title: string
  rate: number
  description: string
  infos: string[]
  image: string
  id: number
}

const Restaurantes = ({
  title,
  rate,
  description,
  infos,
  image,
  id
}: Props) => {
  // const [pratos, setPratos] = useState<PratosAPI[]>([])

  // useEffect(() => {
  //   fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
  //     .then((res) => res.json())
  //     .then((res) => setPratos(res))
  // }, [id])

  return (
    <Card>
      <Tag>{infos}</Tag>
      <Imagem src={image} alt="restaurante" />
      <CardContainer>
        <TituloContainer>
          <Titulo>{title}</Titulo>
          <AvaliacaoContainer>
            <Avaliacao>{rate}</Avaliacao>
            <span>
              <img src={estrela} />
            </span>
          </AvaliacaoContainer>
        </TituloContainer>
        <Descricao>{description}</Descricao>
        <Link to={`/pratos/${id}`}>
          <Botao href="#">Saiba Mais</Botao>
        </Link>
      </CardContainer>
    </Card>
  )
}

export default Restaurantes
