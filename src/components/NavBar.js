import React from 'react'
import {CartWidget} from './CartWidget/CartWidget';
import {Link} from 'react-router-dom'

export const NavBar = () =>{

return <>
<div>
        <nav className="mynav">
            <ul>
                <h3>AutumnVibes ♡ </h3>
                <Link to='#' className="milink">  <li>Inicio</li></Link>
                <Link to='#' className="milink">  <li>Productos</li></Link>
                <Link to='#' className="milink">  <li>Sales</li></Link>
                <Link to='#' className="milink">  <li>Contactos</li></Link>
                <CartWidget />
            </ul>
        </nav>     
</div>
</>;
}

export default NavBar