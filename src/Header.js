import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';

function Header() {
    const [{ basket,user }] = useStateValue();  
     
    const login = ()=>{
        if(user) {
            auth.signOut();
        };
    };

    return (
        <nav className="header">
            <Link to='/'>
                <img className='header__logo' 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt="amazon"/>
            </Link>
            <div className='header__input'>
                <input className="header__inputbar" type='text'/>
                <SearchIcon className='header__SearchIcon' />
            </div>
            <div className='header__nav'>
                <Link to={!user && '/login'} className='header__link'>
                    <div onClick={login} className='header__option'>
                        <span className='option1'>Hello {user?.email}</span>
                        <span className='option2'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                    
                </Link>
                <Link to='/' className='header__link'>
                    <div className='header__option'>
                        <span className='option1'>Returns</span>
                        <span className='option2'>& Orders</span>
                    </div>
                 
                </Link>
                <Link to='/' className='header__link'>
                    <div className='header__option'>
                        <span className='option1'>Your</span>
                        <span className='option2'>Prime</span>
                    </div>
                </Link>
                <Link to='/checkout' className='header__link'>
                    <div className='header__basket'>
                        <ShoppingCartIcon />
                        <span>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
