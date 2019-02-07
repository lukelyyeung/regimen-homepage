import React from 'react';

import Jumbotron from '../components/Jumbotron';
import HeroContent from '../components/HeroContent';
import heroBackgroundUrl from '../../static/media/hero.jpg';
import ProjectIntro from '../components/ProjectIntro';
import Features from '../components/Features';

function Home() {
  return (
    <section role="main">
      <Jumbotron background={heroBackgroundUrl}>
        <section className="section flex-center">
          <HeroContent id="hero-content" />
        </section>
      </Jumbotron>
      <ProjectIntro id="project-introduction" />
      <Features id="features" />
    </section>
  );
}

export default Home;
