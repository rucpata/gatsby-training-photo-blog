import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import Card from '../Card/Card';

const query = graphql`
  query {
    allDatoCmsArticle {
      edges {
        node {
          title
          slug
          category
          excerpt
          date
          thumbnail {
            fluid {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const Articles = () =>{
    const data = useStaticQuery(query)
    return (
        <section className='flex flex-col my-24 justify-center w-full'>
            <div className='flex flex-col text-center pb-5'>
                <h1 className='text-3xl pb-15'>Articles</h1>
                <p className='text-lg text-gray-400'>Lorem, ipsum dolor</p>
            </div>
            <div className='flex flex-wrap '>
                {data.allDatoCmsArticle.edges.map(({ node }) => {
                const { title, slug, excerpt, category, thumbnail, date } = node;
                return (
                  <Card
                    key={slug}
                    category={category}
                    image={thumbnail.fluid}
                    title={title}
                    excerpt={excerpt}
                    slug={slug}
                    date={date}
                  />
                );
              })}
            </div>
        </section>
    )
}

export default Articles;