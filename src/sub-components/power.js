import React from 'react'
import { NavLink } from 'react-router-dom'
import styledComponents from 'styled-components'
import { PowerBtn } from './All-svgs'

// const powerButton = styledComponents.button`
const BTN = styledComponents.button`
  position:fixed;
  top:30px;
  left:50%;
  background-color: transparent;
  color: ${props => props.theme.text};
  border 1px solid ${props => props.theme.text};

  
`
// `
// power there in video is sth like a div that is made up of
// styled component
const PowerButton = () => {
  return (
      <BTN className='w-12 h-12 rounded-full relative hover:scale-125 transition ease-in-out duration-300 hover:bg-green-400 hover:border-white cursor-pointer z-10'>
          <NavLink to='/'>
        <PowerBtn width={30} height={30} fill="" classes={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-current svg`}/>
        </NavLink>
    </BTN>
  )
}

export default PowerButton