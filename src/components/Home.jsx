import React from 'react';

import Jumbotron from './Jumbotron';
import HeroContent from './HeroContent';
import heroBackgroundUrl from '../../static/images/hero.jpg';
import ProjectIntro from './ProjectIntro';
import Features from './Features';

import photo1 from '../../static/images/photo01.jpg';
import photo2 from '../../static/images/photo02.jpg';
import photo3 from '../../static/images/photo03.jpg';
import photo4 from '../../static/images/photo04.jpg';
import photo5 from '../../static/images/photo05.jpg';
import photo6 from '../../static/images/photo06.jpg';
import GridGallery from './GridGallery';
import NetWorkSearch from './NetWorkSearch';

const IMAGES = [
  { src: photo1, label: '選用藥材' },
  { src: photo2, label: '成品中藥梘' },
  { src: photo3, label: '宣傳海報' },
  { src: photo4, label: '製作過程： 攪勻原材料' },
  { src: photo5, label: '製作過程： 倒模及冷卻' },
  { src: photo6, label: '團隊合照' },
];
function Home({ isMobile }) {
  return (
    <section role="main">
      <Jumbotron background={heroBackgroundUrl}>
        <HeroContent id="hero-content" />
      </Jumbotron>
      <ProjectIntro id="project-introduction" />
      <Features id="features" />
      <NetWorkSearch id="practitioner-network" />
      <GridGallery isMobile={isMobile} images={IMAGES} id="gallery" />
    </section>
  );
}

export default Home;
