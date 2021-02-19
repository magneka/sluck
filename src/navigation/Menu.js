import { NavLink }  from 'react-router-dom';

const Menu = (props) => {

    return (
        <>
            <NavLink to="/">messages</NavLink>&nbsp;           
            <NavLink to="/Messages">messages</NavLink>           
            <NavLink to="/Logout">Logout</NavLink>           
            <NavLink to="/Login">Login</NavLink>           
        </>
    )
}

export default Menu
