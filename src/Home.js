import React from 'react'


import AboutMe from "./component/AboutMe";
import Header from "./component/Header";
import Project from "./component/Project";
import Services from "./component/Services";
const Home = () => {
   return (
      <>
       <Header />
       <AboutMe />
       <Services />
       <Project />
      </>
   )
}

export default Home
