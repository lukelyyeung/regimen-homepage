import React from 'react';

import Jumbotron from './Jumbotron';
import HeroContent from './HeroContent';
import heroBackgroundUrl from '../../static/images/hero.jpg';
import ProjectIntro from './ProjectIntro';
import Features from './Features';
import NetWorkSearch from './NetWorkSearch';
import GridGallery from './GridGallery';

import { LayoutContext } from '../store';

function Home() {
  return (
    <section role="main">
      <Jumbotron background={heroBackgroundUrl}>
        <HeroContent id="hero-content" className="flex-center" />
      </Jumbotron>
      <NetWorkSearch id="practitioner-network" />
      <LayoutContext.Consumer>
        {context => <GridGallery id="gallery" {...context} />}
      </LayoutContext.Consumer>
      <ProjectIntro id="project-introduction" />
      <Features id="features" />
    </section>
  );
}

export default Home;
