import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 80px;
  background-color: #808080;
  color: #fff;
  margin-bottom: 40px;
`
export const ContainerHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1024px;
  width: 100%;
  padding: 1.25rem 0;
  margin: auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`
