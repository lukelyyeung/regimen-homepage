import React from 'react';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Tag from '../../components/common/Tag';

function TagsPage({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) {
  return (
    <section className="section">
      <Helmet title={`Tags | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1" style={{ marginBottom: '6rem' }}>
            <h1 className="title is-size-2 is-bold-light">Tags</h1>
            <div className="taglist">
              {group.map(({ fieldValue, totalCount }) => (
                <Tag key={fieldValue}>
                  <Link to={`/tags/${kebabCase(fieldValue)}`}>
                    {fieldValue}({totalCount})
                  </Link>
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.array,
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
