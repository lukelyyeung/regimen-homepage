import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import GridGallery from '../components/GridGallery';
import { LayoutContext } from '../store';

export default function Album({
  data: {
    allFile: { edges },
  },
}) {
  return (
    <section className="section">
      <LayoutContext.Consumer>
        {context => <GridGallery {...context} images={edges} />}
      </LayoutContext.Consumer>
    </section>
  );
}

Album.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
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
`;
