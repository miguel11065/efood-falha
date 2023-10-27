import { Link, useParams } from 'react-router-dom'
import { HeaderBar, Imagem, NomeRestaurante, Tipos } from './styles'
import logo from '../../assets/images/logo.svg'
import bannerImg from '../../assets/images/banner.png'
import { useEffect, useState } from 'react'
import { RestaurantesAPI } from '../../pages/Home'

const HeaderRestaurante = () => {
  const { id } = useParams()
  const [restBanner, setRestBanner] = useState<RestaurantesAPI>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestBanner(res))
  }, [id])

  // if (!restBanner) {
  //   return <h3>Carregando...</h3>
  // }

  return (
    <>
      <div style={{ backgroundImage: `url(${bannerImg})` }}>
        <HeaderBar className="container">
          <Link to="/">
            <a href="#">Restaurantes</a>
          </Link>
          <img src={logo} alt="EFOOD" />
          <a href="#">0 produto(s) no carrinho</a>
        </HeaderBar>
      </div>

      <Imagem style={{ backgroundImage: `url(${restBanner?.capa})` }}>
        <div className="container">
          <Tipos>{restBanner?.tipo}</Tipos>
          <NomeRestaurante>{restBanner?.titulo}</NomeRestaurante>
        </div>
      </Imagem>
    </>
  )
}

export default HeaderRestaurante
