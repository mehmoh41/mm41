import React from 'react'
import styledComponents from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { Design, PowerBtn } from '../sub-components/All-svgs'

import ConfigParticles from '../config/configParticles';


import LogoComponent from '../sub-components/LogoComponent'
import spaceman from '../assets/Images/spaceman.png';
import PowerButton from '../sub-components/power'
import SocialLinks from '../sub-components/SocialLinks'
import { darkTheme, lightTheme } from './themes'
import { NavLink } from 'react-router-dom';
import { keyframes } from 'styled-components';
import BigTitlte from '../sub-components/BigTitle';

const Main = styledComponents.main`
  
`

const Header = styledComponents.div`

`
const float = keyframes`
  0% {transform: translateY(-10px)}
  50% {transform:translateY(15px) translateX(15px)}
  100% {transform: translateY(-10px)}
`
const SpaceMan = styledComponents.div`
  
 animation : ${float} 4s ease infinite;
 img {
   width: 100%;
   height: auto;
 }
`

const Box = styledComponents.div`
position: absolute;
top: 20%;
left:10%;
width: 50rem;
height:450px;
color: ${props => props.theme.text};

border: 2px solid ${props => props.theme.text};

`
const MainContainer = styledComponents.div`
  padding: 1.5rem;
`



const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <MainContainer className='' theme='dark'>
          
      <Header className='flex justify-between mx-4 my-2'>
        <LogoComponent theme='dark' />
          <PowerButton theme='dark' />
      
        
      </Header>
      
      
        <ConfigParticles color="#000"/>
      
      {/* <ParticleComponent theme= 'light' /> */}
      
        {/* main content */}
        <Main className='flex '>
        <Box className='border absolute flex flex-col gap-8 px-8 py-20'>
            <h6 className='text-2xl '>I'm a front-end developer located in Pakistan. I love to create simple yet beautiful websites with great user experience.</h6>
            <h6 className='text-2xl '>I'm interested in the whole frontend stack Like trying new things and building great projects. I'm an independent freelancer and blogger. I love to write blogs and read books.</h6>
            <h6 className='text-2xl '>I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.</h6>
        </Box>
        <SpaceMan className='absolute right-32 top-32'>
          <img src={spaceman }/>
        </SpaceMan>
        </Main>
        {/* ending main content */}
      
        <SocialLinks theme='dark' />
        <BigTitlte text="WORK" top='5%' left="10%" />
    </MainContainer>
      
    </ThemeProvider>
    
  )
}

export default AboutPage