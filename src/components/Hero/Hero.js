import React from "react";
import * as styles from "./hero.module.scss";
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby";


const query = graphql`
  query {
    imageSharp(fluid: { src: { regex: "/hero/" } }) {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(query)
    return(
        <header
      className={`w-full bg-gray-900 h-screen flex justify-between ${styles.container}`}
    >
      <div className="w-1/2 flex justify-between flex-col">
        <div className="ml-20 mt-48">
          <h1 className="text-6xl font-semibold text-white">
            Create amazing <span className="text-blue-500">experience</span>
          </h1>
          <p className="font-medium text-gray-600 text-2xl">
            Hi! I’m Louis and I am professional photograper since 2001. I’m
            writing about cameras, design and photographer stuff
          </p>
          <form className="w-4/6 h-16 bg-white flex justify-between rounded-lg mt-16">
            <label htmlFor="email" className="sr-only">
              Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="myemail@example.com"
              className="w-full rounded-lg pl-4 py-2"
            />
            <button className="my-3 mr-6 bg-black text-white rounded-lg px-5 py-2">
              Subscribe
            </button>
          </form>
        </div>
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
      </div>
      <div className="w-1/2 justify-end flex">
        <Img
          fluid={data.imageSharp.fluid}
          className={`h-full w-4/5 ${styles.heroImage}`}
          alt="Man taking photo on stairs"
        />
      </div>
    </header>
    )
}


export default Hero;