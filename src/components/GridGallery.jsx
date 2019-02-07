import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import HoverContainer from './common/HoverContainer';
import Overlay from './common/Overlay';
import getImageLabelByFileName from '../utils/getImageLabelByFileName';

function GridGallery({ images, id, isMobile, data, ...props }) {
  return (
    <div className="section" id={id}>
      <h2 className="section__header">活動紀錄</h2>
      <div className="flex-center flex-center--stretch">
        <StaticQuery
          query={graphql`
            query {
              allFile(filter: { relativePath: { regex: "/gallery/photo[0-9]{2,}.(jpg)/" } }) {
                edges {
                  node {
										name
                    childImageSharp {
                      fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          `}
          render={({ allFile: { edges } }) =>
            edges.map(({ node: { name, childImageSharp: { fluid } } }, i) => (
              <HoverContainer
                key={i}
                overlay={
                  <Overlay>
                    <h3 style={{ color: 'white' }}>{getImageLabelByFileName(name)}</h3>
                  </Overlay>
                }
                style={{ width: isMobile ? '100%' : '33%', margin: isMobile ? '0.5rem' : '0.1rem' }}
              >
                <Img
                  fluid={fluid}
                  alt={getImageLabelByFileName(name)}
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
              </HoverContainer>
            ))
          }
        />
      </div>
    </div>
  );
}

export default GridGallery;
