import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import PreviewableImage from './common/PreviewableImage';

export default function Logo(props) {
  return (
    <StaticQuery
      query={graphql`
       query {
         logo: file(relativePath: { eq: "logo.png" }) {
           childImageSharp {
             fluid(maxWidth: 2000) {
               ...GatsbyImageSharpFluid
             }
           }
         }
       }
      `}
      render={({ logo }) => <PreviewableImage {...props} imageInfo={logo} />}
    />
  );
}
