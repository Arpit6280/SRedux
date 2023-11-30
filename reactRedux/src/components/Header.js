import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { useState } from 'react';
import { authActions } from '../store/index2';

const Header = () => {
  
 const isAuthenticated= useSelector(state=>state.auth.isAuthenticated)
 const dispatch=useDispatch()
 const authenticationHandler=()=>{
  // e.preventDefault()
 dispatch(authActions.logout())
}
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
    { isAuthenticated &&  <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={authenticationHandler}>Logout</button>
          </li>
        </ul>
      </nav> }
    </header>
  );
};

export default Header;
