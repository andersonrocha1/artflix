import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from '../components/ButtonLink';

/*Trocamos o a href por Link to para que a página se comporte
como SPA... 
*/
/*
const MenuWrapper = styled.nav`
background: var(--black);

`;
*/

function Menu (){
    return(
        <nav  className="Menu">
            
            <Link to="/">
            <img className="Logo" src={Logo} alt="ARTFLIX Logo"/>
            </Link>

            <Button as={Link}  className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );

}

export default Menu;