import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase, memoize } from 'lodash-es';
import Helmet from 'react-helmet';
import { graphql, navigate } from 'gatsby';

import Content, { HTMLContent } from '../components/common/Content';
import Tag from '../components/common/Tag';

const tagNavigationCreator = memoize(tagValue => () => navigate(`/tags/${kebabCase(tagValue)}/`));

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: '4rem' }}>
                <h4>Tags</h4>
                <div className="taglist">
                  {tags.map(tag => (
                    <Tag key={`${tag}tag`} onClick={tagNavigationCreator(tag)}>
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  helmet: PropTypes.node,
  tags: PropTypes.array,
};

BlogPostTemplate.defaultProps = {
  contentComponent: null,
  helmet: null,
  tags: [],
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  const helmet = (
    <Helmet titleTemplate="%s | Blog">
      <title>{post.frontmatter.title}</title>
      <meta name="description" content={post.frontmatter.description} />
    </Helmet>
  );

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={helmet}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
          frontmatter: PropTypes.shape({
            description: PropTypes.string,
          }),
        }),
      }),
    }),
  }).isRequired,
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
