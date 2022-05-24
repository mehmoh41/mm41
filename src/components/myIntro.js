import React from 'react'
import styledComponents from 'styled-components'
import { motion } from 'framer-motion';
import Me from '../assets/Images/profile-img.png';

const Box = styledComponents(motion.div)`
    font-family: 'Poppins' !important;
    width: 65vw;
    height: 55vh;

    display: flex;
    background: linear-gradient(
        to right,
        ${props => props.theme.text} 50%,
        ${props => props.theme.body} 50%),
        linear-gradient(
            to right,
            ${props => props.theme.body} 50%,
            ${props => props.theme.text} 50%);
            
            
            
    
    border-left: 0.5px solid ${props => props.theme.body}; 
    border-right: 0.5px solid ${props => props.theme.text};
    

    
    backgroun-repeat: no-repeat;
    
`
const SubBox = styledComponents.div`
    
    width:50%;
    
    .pic {
        position: absolute;
        bottom:0;
        left:50%;
        
        transform: translate(-50%,0);
        width:100%;
        height: auto;
    }
`

const Text = styledComponents.div`
    
    color: ${props => props.theme.body};

    cursor: pointer;
    padding:2em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    

    &>*:last-child {
        color: ${props => `rgba(${props.theme.bodyRgba} , 0.6)`};
        font-size: 28px;
        font-weight: 200;
    }
`


const Intro = () => {
  return (
      <Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 intro'
          initial={{ height: 0 }}
          animate={{ height: '55vh' }}
          transition= {{ type:'spring',duration:2,delay:1 }}
      >
          <SubBox className='flex'>
              <Text className=''>
                  <h1 className='font-bold text-8xl hi'>Hi<span className='comma'>,</span></h1>
                  <h3 className='font-bold text-5xl leading-none'>I'm Mehdi</h3>
                  <h6 className=''>I design and Code Simple yet beautiful website.</h6>
              </Text>
          </SubBox>
          <SubBox className='relative '>
              <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity:1 }}
              transition= {{duration:1,delay:2 }}
              >
              <img src={Me} className='pic ' alt='Profile' />
              </motion.div>
          </SubBox>
      </Box>
  )
}

export default Intro