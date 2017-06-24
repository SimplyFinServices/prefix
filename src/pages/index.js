import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"
import Helmet from "react-helmet"
import include from "underscore.string/include"

import { rhythm } from "../utils/typography"

import '../css/main.scss';

class BlogIndex extends React.Component {
  render() {
    // console.log("props", this.props)
    const pageLinks = []
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const posts = get(this, "props.data.allMarkdownRemark.edges")
    posts.slice(0,8).forEach(post => {
      if (post.node.path !== "/404/") {
        const blogStyle = {
          backgroundImage: `url(${post.node.frontmatter.hero.children[0].responsiveResolution.src})`
        };
        const title = get(post, "node.frontmatter.title") || post.node.path
        pageLinks.push(
          <div key={post.node.path} className="blog-preview col-xs-6 col-md-3" style={ blogStyle }>
              <div className="tc vam tac">
              <Link to={post.node.fields.slug}>
                <div className="inner">
                  <h3>{post.node.frontmatter.title}</h3>
                  <br />
                  <p>{post.node.frontmatter.subtitle}</p>
                  <br/>
                  <p>→</p>
                </div>
               </Link>
            </div>
          </div>
        )
      }
    })

    return (
      <section className="blog-index">
        <div className="container-fluid">
          <div className="row">
              <h1>Simply Money</h1>
              {pageLinks}
            </div>
        </div>
      </section>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
query IndexQuery {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          subtitle
          date(formatString: "MMMM DD, YYYY")
          hero {
            children {
              ... on ImageSharp {
                  responsiveResolution(width: 400, quality: 90) {
                    src
                    srcSet
                }
              }
            }
          }
        }
      }
    }
  }
}
`
