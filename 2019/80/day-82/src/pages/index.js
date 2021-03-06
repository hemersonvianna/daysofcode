import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Sidebar from "../components/sidebar";

import "../components/layout.css";

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  const currentPage = 1
  const nextPage = (currentPage + 1).toString()

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `react`]} />
      <div className="content">
        <Sidebar />
        <div className="main">
          {posts.map((post) => {
            const tags = post.node.frontmatter.tags.map(item => <a href={`/tags/${item.toLowerCase()}`} className="item-tags-tag">{item}</a>);
            return (
              <div className="item" key={post.node.id}>
                <Link to={post.node.fields.slug}>
                  <h2 className="item-title">{post.node.frontmatter.title}</h2>
                </Link>
                <small className="item-date">Publicado em {post.node.frontmatter.date}</small>
                <p className="item-content">{post.node.excerpt}</p>
                <Link className="item-link" to={post.node.fields.slug}>Leia mais</Link>
                <div className="item-tags">{tags}</div>
              </div>
            )
          })}
          {posts.length > 2 && <div className="pagination">
            <Link to={nextPage} rel="next" className="link">Próxima página →</Link>
          </div>}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 200)
          html
          id
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
