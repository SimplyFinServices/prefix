import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import get from "lodash/get"

class LandingPostTemplate extends React.Component {
  render() {

    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, "data.site.siteMetadata.title")

    // const blogStyle = {
    //   backgroundImage: `url(${post.frontmatter.hero.children[0].responsiveResolution.src})`
    // };

    return (
      <section className="landing-page">
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <div className="container">
          <div className="row">
              <div className="date col-xs-12 col-md-6">
                <h1>{post.frontmatter.title}</h1>
              </div>
              <div className="article col-xs-12 col-md-6">
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default LandingPostTemplate

export const pageQuery = graphql`
query LandingPostByPath($slug: String!) {
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
      tags
    }
  }
}
`
