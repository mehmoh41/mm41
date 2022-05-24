import React from 'react'
import styledComponents from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { Design, PowerBtn } from '../sub-components/All-svgs'

import ConfigParticles from '../config/configParticles';


import LogoComponent from '../sub-components/LogoComponent'

import PowerButton from '../sub-components/power'
import SocialLinks from '../sub-components/SocialLinks'
import { lightTheme } from './themes'
import { NavLink } from 'react-router-dom';
import BigTitlte from '../sub-components/BigTitle';

const Main = styledComponents.main`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`

const Header = styledComponents.div`

`
const Box = styledComponents.div`
width: 550px;
height:450px;
background: none;
border: 2px solid ${props => props.theme.text};
&:hover {
  color:${props => props.theme.body};
  background-color: ${props => props.theme.text};
  transition: all 0.6 ease;
  border: 2px solid ${props => props.theme.body};
  cursor: pointer;
}
`
const MainContainer = styledComponents.div`
  padding: 1.5rem;
`

const skillPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <MainContainer className=''>
          
      <Header className='flex justify-between mx-4 my-2'>
        <LogoComponent theme='light' />
        <NavLink to="/" className='w-12 h-12 rounded-full border fixed left-1/2 -translate-x-1/2 z-10 cursor-pointer bg-none hover:bg-green-400 py-2 px-[8px]'><PowerBtn width={30} height={30} classes="transition ease-in-out duration-400"/></NavLink>
      
        
      </Header>
      
      
        <ConfigParticles />
      
      {/* <ParticleComponent theme= 'light' /> */}
      
      <Main className='flex justify-center items-center gap-12'>
      <Box className='px-6 py-10 '>
        <div className='flex items-center gap-4'>
          {<Design width={30} height={30} fill='currentColor'/>}
          <h2 className='text-4xl font-bold'>Design</h2>
        </div>
        <p className='my-3 text-3xl'>
        I love to create design which<br/> speaks, Keep it clean, minimal and simple.
        </p>
        <h3 className='uppercase font-bold text-xl'>I LIKE TO DESIGN</h3>
        <ul className='list-disc ml-8'>
          <li className='capitalize text-xl'>web design</li>
          <li className='capitalize text-xl'>mobile apps</li>
        </ul>
        <h3 className='uppercase font-bold text-xl'>tools</h3>
        <ul className='list-disc ml-8'>
          <li className='capitalize text-xl'>figma</li>
          <li className='capitalize text-xl'>adobe XD</li>
        </ul>
      </Box>
      <Box className='px-6 py-12 w-full '>
        <div className='flex items-center gap-4'>
          {<Design width={30} height={30} fill='currentColor'/>}
          <h2 className='text-4xl font-bold'>Design</h2>
        </div>
        <p className='my-3 text-3xl'>
        I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
        </p>
        <h3 className='uppercase font-bold text-xl'>Skills</h3>
          <p className='text-xl'>Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc.</p>
        <h3 className='uppercase font-bold text-xl'>tools</h3>
        <p className='text-2xl'>VScode, Github, Codepen etc.
</p>
      </Box>
      </Main>
      
        <SocialLinks />
        <BigTitlte text="WORK" top='73%' left="36%" />
    </MainContainer>
      
    </ThemeProvider>
    
  )
}

export default skillPage