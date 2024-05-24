import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
`
export const Container = styled.div`
  max-width: 1279px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 992px) {
    width: 90%;
  }
`
export const Campo = styled.input`
  padding: 10px;
  width: 100%;
  min-width: 200px;
  font-size: 18px;
  font-weight: bold;
  background-color: #f1f1f1;
  border: none;
  border-radius: 12px;
  color: #666666;
  outline: none;
  letter-spacing: 1px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`
export const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  font-weight: bold;

  &:hover {
    background-color: #45a049;
  }
`
export const BodyContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
    to right top,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
`

export default EstiloGlobal
