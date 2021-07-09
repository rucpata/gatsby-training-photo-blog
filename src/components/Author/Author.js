import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";


const query = graphql`
  query {
    imageSharp(fluid: { src: { regex: "/louis/" } }) {
      fluid {
        src
      }
    }
  }
`;

const Author = () => {
  const data = useStaticQuery(query);
  return (
    <div className="flex ml-20 mb-6 items-center">
      <Img
        fluid={data.imageSharp.fluid}
        className="h-16 w-16 rounded-full mr-2"
        alt=""
      />
      <div>
        <p className="text-white font-medium">Louis Edwards</p>
        <p className="text-gray-500">Photographer, design lover</p>
      </div>
    </div>
  );
};

export default Author;