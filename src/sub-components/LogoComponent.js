import React from 'react';
import { NavLink } from 'react-router-dom';
import styledComponents from 'styled-components';
import { darkTheme } from '../components/themes';
import SoundBar from './SoundBar';


const Logo = styledComponents.h1`
  color:  ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};
  z-index:1;
  font-family: 'Poppins', cursive;
`


const LogoComponent = (props) => {
  return (
    
    <Logo className='text-4xl font-bold flex items-center gap-4' color={ props.theme }>
      <NavLink to='/'>
        MM
      </NavLink>
    </Logo>    // put it inside one div because of music also comes here
  )
}

export default LogoComponent