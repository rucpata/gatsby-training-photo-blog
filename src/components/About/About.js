import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export const query = graphql`
  query {
    datoCmsAbout {
        text
        photo {
          fluid {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }`

const About = () => {
    const data = useStaticQuery(query);
    const {text, photo} = data.datoCmsAbout;

    return (
        <section className='flex flex-row bg-gray-900 h-full'>
            <div className='h-full w-full'>
                <Img 
                    className='h-full w-full'
                    fluid={photo.fluid}
                    alt=''
                />
            </div>
            <div className='h-full w-full p-10 m-auto text-white'>
                <h2 className=' text-3xl text-center pb-10'>O mnie</h2>
                <span className='text-xl'>{text}</span>
            </div>
            
        </section>
    )
}

export default About;
