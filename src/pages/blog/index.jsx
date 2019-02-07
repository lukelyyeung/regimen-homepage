import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { Col, Card } from 'antd';

import { LayoutContext } from '../../store';
import ItemBox from '../../components/common/ItemBox';
import RowContainer from '../../components/common/RowContainer';
import PreviewableImage from '../../components/common/PreviewableImage';

const { Meta } = Card;

export default function Blogs({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}) {
  const postElements = posts
    .filter(
      ({
        node: {
          frontmatter: { isShown },
        },
      }) => isShown
    )
    .map(({ node: post }) => {
      const title = (
        <div>
          <Link className="heading" to={post.fields.slug}>
            {post.frontmatter.title}
          </Link>
          <small className="secondary-text" style={{ display: 'block' }}>
            {post.frontmatter.date}
          </small>
        </div>
      );

      return (
        <Col
          {...{ xs: 24, sm: 24, md: 12, lg: 8 }}
          style={{ marginBottom: '0.5rem', marginTop: '0.5rem' }}
          key={post.id}
        >
          <ItemBox
            className="blog-summary"
            cover={<PreviewableImage imageInfo={post.frontmatter.featureImage || {}} />}
            actions={[
              <Link className="read-more" to={post.fields.slug}>
                Read more
              </Link>,
            ]}
          >
            <Meta title={title} description={post.excerpt} />
          </ItemBox>
        </Col>
      );
    });

  return (
    <section className="section">
      <h2 className="section__header">有關文章</h2>
      <LayoutContext.Consumer>
        {({ isMobile }) => (
          <RowContainer gutter={isMobile ? 0 : 16}>
            {postElements.length > 0 ? postElements : <h3 className="flex-center">暫無文章</h3>}
          </RowContainer>
        )}
      </LayoutContext.Consumer>
    </section>
  );
}

Blogs.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            isShown
            date(formatString: "MMMM DD, YYYY")
            featureImage {
              childImageSharp {
                fluid(maxWidth: 630) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
