import React from "react";
import Hero from "../components/Hero/Hero";
import Articles from "../components/Articles/Articles";


const Home = ({data}) => {
    return(
        <>
            <Hero/>
            <Articles/>
        </>
    )
}


export default Home;
