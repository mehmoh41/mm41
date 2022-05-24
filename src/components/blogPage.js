import React from 'react'
import styledComponents from 'styled-components'
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg';
import LogoComponent from '../sub-components/LogoComponent';
import PowerButton from '../sub-components/power';
import SocialLinks from '../sub-components/SocialLinks';
import BlogComponent from './blogComponent';
import { Blogs } from '../data/BlogData';
import AnchorComponent from '../sub-components/Anchor';
import BigTitlte from '../sub-components/BigTitle';
import { motion } from 'framer-motion';
const MainContainer = styledComponents(motion.div)`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  
  
`
// framer motion config
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5
    }
  }
}
const Container = styledComponents.div`
  background-color: ${props => `rgba(${props.theme.bodyRgba} , 0.8)`};
  width:100%;
  position: relative;
  padding: 10px;
  
`

const blogPage = () => {
  return (
    <MainContainer className='relative'
      variants={container}
      initial='hidden'
      animate='show'
      exit={{ opacity: 0, transition:{duration:0.5}}}
    >
      <Container>
        <section className='flex justify-between px-8 py-6'>
        <LogoComponent />
        <PowerButton />
          {/* <AnchorComponent /> */}
        
        
        </section>
        <section className='max-w-screen-md mx-auto'>
        <div className='grid grid-cols-2 gap-4'>
          {
            Blogs.map(blog => {
              return <BlogComponent key={blog.id} blog={ blog }/>
            })
          }
        </div>
        </section>
      </Container>
      <SocialLinks/>
      <BigTitlte text="BLOG" top='3%' left="3%" />

    </MainContainer>
  )
}

export default blogPage