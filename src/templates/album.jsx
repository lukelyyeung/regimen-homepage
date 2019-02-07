import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import GridGallery from '../components/GridGallery';
import { LayoutContext } from '../store';

export default function Album({
  data: {
    markdownRemark: {
      frontmatter: { images },
    },
  },
}) {
  return (
    <section className="section">
      <LayoutContext.Consumer>
        {context => <GridGallery {...context} images={images} />}
      </LayoutContext.Consumer>
    </section>
  );
}

Album.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "album" } }) {
      frontmatter {
        images {
          image {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
          caption
        }
      }
    }
  }
`;
