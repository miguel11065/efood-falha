import logo from '../../assets/images/logo.svg'
import banner from '../../assets/images/banner.png'
import { Cabecalho, Logo, Titulo } from './styles'

const Header = () => (
  <Cabecalho style={{ backgroundImage: `url(${banner})` }}>
    <Logo src={logo} />
    <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
  </Cabecalho>
)

export default Header
