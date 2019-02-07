import React from 'react';

import Jumbotron from './Jumbotron';
import HeroContent from './HeroContent';
import heroBackgroundUrl from '../../static/images/hero.jpg';
import ProjectIntro from './ProjectIntro';
import Features from './Features';
import GridGallery from './GridGallery';
import NetWorkSearch from './NetWorkSearch';

function Home({ isMobile }) {
  return (
    <section role="main">
      <Jumbotron background={heroBackgroundUrl}>
        <HeroContent id="hero-content" className="flex-center"/>
      </Jumbotron>
      <ProjectIntro id="project-introduction" />
      <Features id="features" />
      <NetWorkSearch id="practitioner-network" />
      <GridGallery isMobile={isMobile} id="gallery" />
    </section>
  );
}

export default Home;
