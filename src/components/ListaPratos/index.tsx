import { PratosAPI } from '../../pages/Restaurante'
import PratosLista from '../Pratos'
import { ContainerPratos } from './styles'

type Props = {
  pratos: PratosAPI[]
}

const ListaPratos = ({ pratos }: Props) => (
  <>
    <div className="container">
      <ContainerPratos>
        {pratos &&
          pratos.map((prato) => (
            <PratosLista
              key={prato.id}
              id={prato.id}
              image={prato.foto}
              title={prato.nome}
              description={prato.descricao}
              portion={prato.porcao}
              price={prato.preco}
            />
          ))}
      </ContainerPratos>
    </div>
  </>
)

export default ListaPratos
