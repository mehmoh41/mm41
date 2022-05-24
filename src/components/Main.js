import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { YinYang } from '../sub-components/All-svgs';
import { motion } from 'framer-motion';
import LogoComponent from '../sub-components/LogoComponent';
import PowerButton from '../sub-components/power';
import SocialLinks from '../sub-components/SocialLinks';
import Intro from '../components/myIntro'
const MainComponent = styled.div`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  padding: 2rem;
  
  h2 , h3, h4,h5,h6 {
    font-family: 'Karla' , san-sarif;
    font-weight: 500;
  }
  `
  // 
const Component = styled.div`
    
`
// say hi or contact
const Contact = styled(NavLink)`
  color: ${props => props.theme.text},
  
`
// navigation links
const Blog = styled(NavLink)`
color: ${props => props.theme.text};
z-index:1;
`

const Work = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
`
const ABOUT = styled(NavLink)`
  color: ${props => props.click ? props.theme.body : props.theme.text};
  
`
const Skills = styled(NavLink)`
color: ${props => props.theme.text};
`
const rotate = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transfrom: rotate(360deg);
  }
`
const Center = styled.button`
position: absolute;
top:${props => props.click ? '88%' : '50%'};
left:${props => props.click ? '90%' : '50%'};;
transform: translate(-50%,-50%);
@keyframes rotate {
  from {transform: rotate(0)}
  to {transform: rotate(360deg)}
}
  border: none;
  outline:none;
  background: transparent;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  cursor: pointer;
  &>:first-child{
    animation: rotate infinite 1.5s linear;
  }
`
const DarkDiv = styled.div`
  position:absolute;
  top:0;
  background-color:#000;
  right:50%;
  width: ${props => props.click ? '50%' : '0'};
  height:${props => props.click ? '100%' : '0'};
  transition: height 0.5s ease, width 1.6s ease 0.5s;
`

const Main = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <MainComponent>
      {/* dark div */}
      <DarkDiv click={ click }/>  
      {/* ending dark div */}
      {/* main navbar */}
      <Component className='flex justify-between items-center'>
      <LogoComponent theme={click ? 'dark' : 'light'} />
        
        <PowerButton />
        <Contact target="_blank" to={{pathname: "//mailto:moh.meh41@gmail.com"}}>
          <motion.h2
            className='font-bold text-2xl'
            initial={{
              y: -200,
              transition: {type:'spring' , duration: 1.5 , delay:1}
            }}
            animate={{
              y: 0,
              transition: {type:'spring' , duration: 1.5 , delay:1}
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{scale:0.9}}
          >
            Say Hi
          </motion.h2>
        </Contact>
      </Component>
      {/* ending main navbar */}
      {/* main content */}
      <Center click={click} className='cursor-pointer'>
        <YinYang onClick = {(() => handleClick() )} width={click ? 120: 200} height={click? 120 : 200} fill="currentColor" />
        <motion.span
          initial={{
            y: -200,
            transition: {type:'spring' , duration: 1.5 , delay:1}
          }}
          animate={{
            y: 0,
            transition: {type:'spring' , duration: 1.5 , delay:1}
          }}
        whileHover={{ scale: 1.2 }}
        whileTap={{scale:0.9}}
        >Click Here</motion.span>  
      </Center>
      {/* ending main content */}
      {/* sides navigation links */}
      <div className='flex justify-between items-center relative top-1/2  -translate-y-1/2'>
      <Work to='/work' className="text-2xl font-normal -rotate-90 -ml-4" click={click}>
          <motion.h2
            initial={{
              y: -200,
              transition: {type:'spring' , duration: 1.5 , delay:1}
            }}
            animate={{
              y: 0,
              transition: {type:'spring' , duration: 1.5 , delay:1}
            }}
          whileHover={{ scale: 1.2 }}
          whileTap={{scale:0.9}}
          >
            Work
          </motion.h2>
      </Work>
      <Blog to='/blog' className="text-2xl font-normal rotate-90" click={click}>
          <motion.h2
            initial={{
              y: -200,
              transition: {type:'spring' , duration: 1.5 , delay:1}
            }}
            animate={{
              y: 0,
              transition: {type:'spring' , duration: 1.5 , delay:1}
            }}
          whileHover={{ scale: 1.2 }}
          whileTap={{scale:0.9}}
          >
            Blog
          </motion.h2>
      </Blog>
      </div>
      {/* sides navigation links */}
      
      {/* bottom navigation links */}
      <section className='absolute bottom-4 left-1/2 -translate-x-1/2 w-full'>
      <div className='flex justify-evenly px-32 text-semibold text-2xl'>
        <ABOUT to='/about' className='' click={click}>
            <motion.h2
              initial={{
                y: 200,
                transition: {type:'spring' , duration: 1.5 , delay:1}
              }}
              animate={{
                y: 0,
                transition: {type:'spring' , duration: 1.5 , delay:1}
              }}
            whileHover={{ scale: 1.2 }}
            whileTap={{scale:0.9}}
            >
              About.
            </motion.h2>
        </ABOUT>
        
        <Skills to='/skill' className='' click={click}>
            <motion.h2
              initial={{
                y: 200,
                transition: {type:'spring' , duration: 1.5 , delay:1}
              }}
              animate={{
                y: 0,
                transition: {type:'spring' , duration: 1.5 , delay:1}
              }}
            whileHover={{ scale: 1.2 }}
            whileTap={{scale:0.9}}
            >Skills.</motion.h2>
        </Skills>
      </div>
      </section>
      {/* bottom navigation links ending */}
      
      <SocialLinks theme={click ? 'dark' : 'light'} additionalClass/>
      {/* intro section */}
      {click ? <Intro click={ click }/> : null}
    </MainComponent>
  )
}

export default Main