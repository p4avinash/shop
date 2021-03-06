import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo/crown.svg';
import { auth } from '../../firebase/firebase.util';

import './header.styles.scss';

const Header = ({currentUser}) => {
    return(
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>

            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {
                    currentUser ? <Link className='option' to='/' onClick={()=>auth.signOut()}>SIGN OUT</Link> : <Link className="option" to="/signin">SIGN IN</Link>
                }
            </div>

        </div>
    )
}

export default Header;