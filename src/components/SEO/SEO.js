import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';

const query = graphql `
    query {
        site {
        siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl
            defaultImage: image
            }
        }
    }
`;

const SEO = ({title, description, image, type }) => {
    const {site} = useStaticQuery(query);
    const { pathname } = useLocation();

    const {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        siteUrl,
        defaultImage,
        twitterUsername,
    } = site.siteMatedata;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`,
    };

    return (
        <Helmet title={seo.title}>
            <meta name='description' content={seo.description}/>
            <meta name='image' content={seo.image}/>
            <meta property="og:url" content={seo.title}/>
            <meta property="og:title" content={seo.title}/>
            {type === "article" ? (
                <meta property="og:type" content='article'/>
            ) : null}
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image}/>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterUsername}/>
            <meta name="twitter:title" content={seo.title}/>
            <meta name="twitter:description" content={seo.description}/>
            <meta name="twitter:image" content={seo.image}/>

        </Helmet>
    )
};


export default SEO
