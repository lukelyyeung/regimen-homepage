import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';

import Layout from '../layouts/GlobalLayout';

export default function TagRoute({
  data: {
    allMarkdownRemark: { edges: posts, totalCount },
    site: {
      siteMetadata: { title },
    },
  },
  pageContext,
  ...otherProps
}) {
  const postLinks = posts.map(post => (
    <li key={post.node.fields.slug}>
      <Link to={post.node.fields.slug}>
        <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
      </Link>
    </li>
  ));
  const { tag } = pageContext;
  const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with “${tag}”`;

  return (
    <section className="section">
      <Helmet title={`${tag} | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1" style={{ marginBottom: '6rem' }}>
            <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
            <ul className="taglist">{postLinks}</ul>
            <p>
              <Link to="/tags/">Browse all tags</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

TagRoute.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    tag: PropTypes.string,
  }).isRequired,
};

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
