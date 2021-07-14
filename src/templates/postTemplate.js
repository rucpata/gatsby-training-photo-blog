import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
// import styles from './postTemplate.module.scss';

export const query = graphql`
  query($slug: String!) {
    datoCmsArticle(slug: { eq: $slug }) {
      slug
      title
      category
      content
      date
      thumbnail {
        fixed(width: 200, height: 200) {
          ...GatsbyDatoCmsFixed_tracedSVG
        }
      }
    }
  }
`;



const PostTemplate = ({ data }) => {
  const {
    title,
    category,
    content,
    thumbnail,
    date,
  } = data.datoCmsArticle;

    return (
        
        <article className='mx-auto flex flex-col w-full justify-center items-center my-24 max-w-3xl'>
            <div className='flex w-full justify-start items-start my-24'>
                <Img 
                    className="object-cover object-center rounded-lg"
                    fixed={thumbnail.fixed}
                    alt=""
                />
                <div className='flex flex-col m-3 mx-6 justify-start items-start'>
                    <span className='text-blue-600'>{category}</span>
                    <h1 className='text-3xl'>{title}</h1>
                    <span>{date}</span>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }}/>
            
        </article>
    )
};

export default PostTemplate;
