import { Link }  from 'react-router-dom';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuButton = styled.button`
    font-family: 'Fira Sans', sans-serif;
    font-size: 30px;   
    text-decoration: none;
    color: red; //#d1c6ad;
    
    border-radius: 8px;
    margin-right: 10px;
    border: 1px solid 797596;
    padding: 5px 10px 5px 10px;
    background-color: #d1c6ad; // #3F0E41;

    &:hover {
        border: 5px solid #797596;
    }
`

const Menu = (props) => {

    return (
        <div>
            <MenuButton as={Link} to="/Messages"><FontAwesomeIcon icon="list" />&nbsp;Messages</MenuButton>
            <MenuButton as={Link} to="/Login"><FontAwesomeIcon icon="user" />&nbsp;Login</MenuButton>          
            <MenuButton as={Link} to="/Logout"><FontAwesomeIcon icon="user-slash" />&nbsp;Logout</MenuButton>
        </div>
    )
}

export default Menu