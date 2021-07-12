import React from 'react'
import Img from 'gatsby-image';

export default function Card({image}) {
    return (
        <article className='p-4 w-1/3'>
            <div className='h-full border-2 border-gray-100 rounded-lg overflow-hidden'>
                <Img 
                    className='h-48 w-full object-cover object-center'
                    fluid={image.childImageSharp.fluid}/>
            </div>
            
        </article>
    )
}
