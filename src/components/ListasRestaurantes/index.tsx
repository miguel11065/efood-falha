import { RestaurantesAPI } from '../../pages/Home'
import Restaurantes from '../Restaurantes'
import { List } from './styles'

type Props = {
  restaurante: RestaurantesAPI[]
}

const ListasRestaurantes = ({ restaurante }: Props) => (
  <div>
    <div className="container">
      <List>
        {restaurante.map((restaurant) => (
          <Restaurantes
            key={restaurant.id}
            id={restaurant.id}
            title={restaurant.titulo}
            rate={restaurant.avaliacao}
            description={restaurant.descricao}
            infos={restaurant.tipo}
            image={restaurant.capa}
          />
        ))}
      </List>
    </div>
  </div>
)

export default ListasRestaurantes
