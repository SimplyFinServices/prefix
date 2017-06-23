import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import get from "lodash/get"

import Bio from "../components/Bio"
import { rhythm, scale } from "../utils/typography"

import '../css/_blog.scss'

class BlogPostTemplate extends React.Component {
  render() {

    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, "data.site.siteMetadata.title")
    const blogStyle = {
      backgroundImage: `url(${post.frontmatter.hero.children[0].responsiveResolution.src})`
    };

    const tags = post.frontmatter.tags.map(tag => <span className="tag">#{tag}</span>);

    return (
      <section className="blog-entry">
        <header style={ blogStyle }>
          <div className="blog-title">
            <h1>{post.frontmatter.title}</h1>
            <div className="tags">{tags}</div>
            <Bio author={post.frontmatter.author} />
          </div>
        </header>
        <div className="container">
          <div className="row">
              <div className="date col-xs-12 col-md-2 col-md-push-1">
                <p>{post.frontmatter.date}</p>
              </div>
              <div className="article col-xs-12 col-md-push-1 col-md-6">
              <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
              <h1>{post.frontmatter.subtitle}</h1>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
        </div>
      </section>
      )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
query BlogPostByPath($slug: String!) {
  site {
    siteMetadata {
      title
      author
    }
  }
  markdownRemark(fields: { slug: { eq: $slug }}) {
    id
    html
    frontmatter {
      title,
      subtitle,
      date(formatString: "MMMM DD, YYYY")
      author,
      tags,
      hero {
        children {
          ... on ImageSharp {
              responsiveResolution(width: 1400, quality: 90) {
                src
                srcSet
            }
          }
        }
      }
    }
  }
}
`
