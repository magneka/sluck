import styled from 'styled-components'

const RootContainer = styled.div`  
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 200px auto 200px;
  grid-template-areas: 
    "HeaderArea"
    "ContentArea" 
    "FooterArea";  
  height: 100vh;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  text-align: left;
  //min-width: 1366px;
`
export default RootContainer