import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import Card from '../Card/Card';

const query = graphql`
    query{
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                category
                date
                slug
                title
                image {
                  childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
              excerpt
            }
          }
        }
      }      
`;

export default function Articles() {
    const data = useStaticQuery(query)
    return (
        <article className='flex flex-col my-24 justify-center w-full'>
            <div className='flex flex-col text-center '>
                <h1 className='text-3xl pb-15'>Articles</h1>
                <p className='text-lg text-gray-400'>Lorem, ipsum dolor</p>
            </div>
            <div className='flex flex-wrap '>
                {data.allMarkdownRemark.edges.map(
                    ({node: {frontmatter, excerpt}}) => {
                        const { category, image, title, slug} = frontmatter;
                        return(
                            <Card
                                key={slug}
                                category={category}
                                image={image}
                                title={title}
                                excerpt={excerpt}
                                slug={slug}
                            />
                        )
                    }
                )}
            </div>
        </article>
    )
}
