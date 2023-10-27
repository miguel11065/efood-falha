import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.indianRed};
  padding: 12px;
`

export const PratoImg = styled.img`
  width: 304px;
  margin-bottom: 8px;
`

export const Titulo = styled.h3`
  color: ${cores.antiqueWhite};
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  color: ${cores.antiqueWhite};
  font-size: 16px;
  margin-bottom: 8px;
`

export const Botao = styled.button`
  background-color: ${cores.antiqueWhite};
  color: ${cores.indianRed};
  border: none;
  width: 304px;
  font-weight: bold;
  font-size: 14px;
  padding: 4px;
  cursor: pointer;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  justify-content: center;
  align-items: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: -1;
  }

  &.active {
    display: flex;
  }
`

export const ModalContent = styled.div`
  background-color: ${cores.indianRed};
  width: 1024px;
  height: 344px;
  padding: 32px;
  position: relative;
`
export const ModalContainer = styled.div`
  display: flex;
  gap: 24px;
  color: ${cores.white};

  > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  h4 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  p,
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  button {
    color: ${cores.indianRed};
    padding: 4px 7px;
    border: none;
    cursor: pointer;
    display: block;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    margin-top: 16px;
  }
`

export const Fechar = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`
