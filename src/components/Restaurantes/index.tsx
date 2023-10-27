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
