import { NavLink, Link }  from 'react-router-dom';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import FontAwesomeIcon from '@fortawesome/react-fontawesome';
//import { faHospital } from '@fortawesome/free-regular-svg-icons'



const MenuButton = styled.button`
    font-family: 'Fira Sans', sans-serif;
    font-size: 30px;   
    color: white;

    text-decoration: none;
    
    border-radius: 8px;
    margin-right: 10px;
    border: 1px solid white;
    padding: 5px 10px 5px 10px;
    background-color: #3F0E41;
    &:hover {
        border: 5px solid gray;
    }
`

const NavLinkButton = styled(NavLink)`

    margin-right: 10px;
    padding: 0px 10px 5px 10px;
    link {
        border: 2px solid black;
    }
    active {
        //background-color: rgb(119, 47, 14);
        border: 2px solid white;
        //color: red;
    
  
    //background-color: #e7e7e7;
    
    //font: bold 11px Arial;
    text-decoration: none;
    //background-color: #EEEEEE;
    //color: #333333;
    //padding: 2px 6px 2px 6px;
    //border-top: 1px solid #CCCCCC;
    //border-right: 1px solid #333333;
    //border-bottom: 1px solid #333333;
    /border-left: 1px solid #CCCCCC;
}
`

const Menu = (props) => {



    return (
        <div>
 <FontAwesomeIcon icon="check-square" /><FontAwesomeIcon icon="coffee" /> 


            <MenuButton as={Link} to="/">dd </MenuButton>
            <Link to="/"><MenuButton>label text</MenuButton></Link>
            <NavLinkButton to="/Messages">messages</NavLinkButton>           
            <NavLinkButton to="/Logout">Logout</NavLinkButton>           
            <NavLinkButton to="/Login">Login</NavLinkButton>           
        </div>
    )
}

export default Menu

/*

z§§
import styled from "styled-components";

const Nav = ({ className }) => {
  return (
    <div className={className}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};
const NavLink = styled(Link)`
  padding: 20px;
  color: white;
  text-decoration: none;
  &:hover {
    color: red;
    background: blue;
  }
`;
export default styled(Nav)`
  color: white;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

*/
