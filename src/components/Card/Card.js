import React from 'react'
import Img from 'gatsby-image';
import { Link } from 'gatsby';

export default function Card({image, category, title, slug, excerpt}) {
    return (
        <article className='p-4 w-1/3 justify-center'>
            <div className='h-full border-2 border-gray-100 rounded-lg overflow-hidden pb-4'>
                <Img 
                    className='h-48 w-full object-cover object-center'
                    fixed={image.childImageSharp.fixed}
                />
                <div className='p-4'>
                    <p className='text-center text-xs text-gray-400'>{category}</p>
                    <h2 className='text-xl text-center py-5'>{title}</h2>
                    <p className='text-base text-justify text-gray-600'>{excerpt}</p>
                </div>
                <Link className='py-3 text-sm text-blue-400  hover:text-blue-900' to={slug}>Learn More</Link>
            </div>  
        </article>
    )
}
