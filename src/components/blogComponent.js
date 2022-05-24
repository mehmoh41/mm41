import React from 'react'
import { NavLink } from 'react-router-dom'
import styledComponents from 'styled-components'


const Box = styledComponents(NavLink)`
    width: 100%;

    margin: 0 auto;
    height: 20rem;
    padding: 1rem;
    color: ${props => props.theme.text};
    border: 2px solid ${props => props.theme.text};
    backdrop-filter: blue(4px);
    box-shadow: 0 0 1rem 0 rgba(0,0,0,0.2);
    cursor: pointer;

    display: flex;
    flex-direction: column;
    z-index: 5;
    &:hover {
        color:${props => props.theme.body};
        background-color: ${props => props.theme.text};
        transition: all 0.3 ease;
    }
`
const Image = styledComponents.div`
    background-image: ${props => `url(${props.img})`};
    width:100%;
    height:60%;
    background-size:cover;
    background-position: center center;
    border: 1px solid transparent;
    ${Box}:hover &{
        border: 1px solid ${props => props.theme.body};
    }
`
const Title = styledComponents.h3`
    color: inherit;
    padding: 0.5rem 0;
    padding-top: 1rem;
    font-family: 'Karla',sans-sarif;
    font-weight: 700;
    border-bottom: 1px solid ${props => props.theme.text};
    ${Box}:hover &{
        border-bottom: 1px solid ${props => props.theme.body};
    }
    text-align: left;

`


const BlogComponent = (props) => {
    const { name, tags, date, imgSrc, link } = props.blog;
  return (
    <Box to={{ pathname: link }} target="_blank">
          <Image img={imgSrc} />   
          <Title>
              {name}
          </Title>
          <div>
              {tags.map((tag, id) => {
                  return <span key={id} className="mr-2 mt-2 inline-block">#{ tag } </span>
              })}
          </div>
          <div>
              <span className='my-3 inline-block'>{ date }</span>
          </div>
    </Box>
  )
}

export default BlogComponent