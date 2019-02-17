import React from 'react';

import Jumbotron from '../components/Jumbotron';
import HeroContent from '../components/HeroContent';
import heroBackgroundUrl from '../../static/images/hero.jpg';
import ProjectIntro from '../components/ProjectIntro';
import Features from '../components/Features';

function Home({ isMobile }) {
  return (
    <section role="main">
      <Jumbotron background={heroBackgroundUrl}>
        <HeroContent id="hero-content" className="flex-center" />
      </Jumbotron>
      <ProjectIntro id="project-introduction" />
      <Features id="features" />
    </section>
  );
}

export default Home;
