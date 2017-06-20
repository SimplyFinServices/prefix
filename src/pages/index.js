import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"
import Helmet from "react-helmet"
import include from "underscore.string/include"

import Bio from "../components/Bio"
import { rhythm } from "../utils/typography"

import '../css/main.scss';

class BlogIndex extends React.Component {
  render() {
    // console.log("props", this.props)
    const pageLinks = []
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const posts = get(this, "props.data.allMarkdownRemark.edges")
    posts.forEach(post => {
      if (post.node.path !== "/404/") {
        const title = get(post, "node.frontmatter.title") || post.node.path
        pageLinks.push(
          <li
            key={post.node.path}
            style={{
              marginBottom: rhythm(1 / 4),
            }}
          >
            <Link style={{ boxShadow: "none" }} to={post.node.fields.slug}>
              {post.node.frontmatter.title}
            </Link>
          </li>
        )
      }
    })

    return (
      <div className="container">
        <div className="row">
            <Helmet title={get(this, "props.data.site.siteMetadata.title")} />
            <div className="col-xs-12 col-md-3">
              <Bio />
            </div>
            <div className="col-xs-12 col-md-9">
              <ul>
                {pageLinks}
              </ul>
          </div>
        </div>
      </div>
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
        }
      }
    }
  }
}
`
