import React from 'react'
import Img from 'gatsby-image';
import { Link } from 'gatsby';

export default function Card({image, category, title, slug, excerpt}) {
    return (
        <article className='p-4 w-1/3 justify-center'>
            <div className='h-full border-2 border-gray-100 rounded-lg overflow-hidden'>
                <Img 
                    className='h-36 w-full object-cover object-center'
                    fluid={image.childImageSharp.fluid}
                />
                <div className='py-4'>
                    <p className='text-right text-xs text-gray-400 px-4'>{category}</p>
                    <h2 className='text-xl text-center py-5'>{title}</h2>
                    <p className='text-base text-justifytext-gray-600'>{excerpt}</p>
                </div>
                <Link className='py-3 text-sm text-blue-400  hover:text-blue-900' to={slug}>Learn More</Link>

            </div>
            
            
        </article>
    )
}
