import styled from 'styled-components'

const HeaderArea = styled.div`  
  font-family: 'Fira Sans', sans-serif;
  font-size: 40px;
  color: white;
  padding: 15px 15px 15px 15px;
  background-color: #3F0E41;

  a:hover {
    color: white;
  }
  a:visited {
    color: white;
  }

  @media print { 
      display: none      
  }
   
`

export default HeaderArea 