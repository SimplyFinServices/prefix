import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import get from "lodash/get"

import './style.scss';

class LandingPostTemplate extends React.Component {
  render() {

    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, "data.site.siteMetadata.title")

    const backgroundStyle = {
      backgroundImage: `url(${post.frontmatter.hero.children[0].responsiveResolution.src})`
    };

    return (
      <section className="landing-page">
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <div className="container-fluid">
          <div className="row">
              <div className="landing-background col-xs-12 col-md-6">
                  <div className="inner" style={ backgroundStyle }>
                  </div>
              </div>
              <div className="landing-details col-xs-12 col-md-6">


                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-xs-12">
                        <h1>{post.frontmatter.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: post.html }} />
                      </div>
                    </div>
                  </div>


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
      age,
      gender,
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
