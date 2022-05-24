import React from 'react'
import { NavLink } from 'react-router-dom'
import styledComponents from 'styled-components'
import { Facebook, Github, Twitter, YouTube } from './All-svgs'
import {darkTheme} from '../components/themes';
import { motion } from 'framer-motion';

const Line = styledComponents(motion.span)`
    background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body}
`

const SocialLinks = (props) => {
  return (
      <div className={`grid grid-flow-row gap-3 items-center ml-4`} style={{ position: 'fixed', top: '70%' , left:'16px'}}>
          <motion.div className='inline-block'
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring' ,duration:1,delay:1.2}}
          >
          {/* <Link to={{ pathname: window.location.replace("https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies") }} target="_blank">link</Link> */}
              <NavLink to={{ pathname : "//github.com/mehmoh41"}} target="_blank"  className='text-inherit'>
                  <Github width={25} height={25} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}className='inline-block' />
              </NavLink>
          </motion.div>
          <motion.div className='inline-block'
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring' ,duration:1,delay:1.4}}
          >
              <NavLink to={{pathname: '//Twitter.com/mehmoh41'}} target="_blank"  className='text-inherit'>
                  <Twitter width={25} height={25} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} className='inline-block'/>
              </NavLink>
          </motion.div>
          <motion.div className='inline-block'
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring' ,duration:1,delay:1.6}}
          >
              <NavLink to={{pathname: '//Facebook.com/mehmoh41'}} target="_blank"  className='text-inherit'>
                  <Facebook width={25} height={25} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} className='inline-block'/>
              </NavLink>
          </motion.div>
          <motion.div className='inline-block'
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring' ,duration:1,delay:1.8}}
          >
              <NavLink to={{pathname: '//youtube.com/mehmoh41'}} target="_blank"  className='text-inherit'>
                  <YouTube width={25} height={25} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} className='inline-block'/>
              </NavLink>
          </motion.div>
          <Line className='w-1 h-28 ml-2 absolute top-44' color={props.theme}
              initial={{
                  height: 0
              }}
              animate={{
                  height: '8rem'
              }}
              transition= {{
              type: 'spring', duration: 1,delay:0.8
              }}
          />
      </div>
  )
}

export default SocialLinks