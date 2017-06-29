import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import get from "lodash/get"
import Equalizer from 'react-equalizer';

import Button from '../../components/Button';

import './style.scss';

const buttonQuote = {
    buttonLink: '/quote',
    buttonText: 'Get a quote',
    buttonColour: 'green',
    buttonIcon: 'quote'
}

const buttonCall = {
    buttonLink: '/call-me',
    buttonText: 'Call me back',
    buttonColour: 'blue',
    buttonIcon: 'phone'
}

class LandingPostTemplate extends React.Component {

  getNodes(equalizerComponent, equalizerElement) {
    return [
      this.refs.funeral,
      this.refs.combo
    ]
  }

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
            <Equalizer>
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

                    <Equalizer nodes={this.getNodes.bind(this)}>
                      <div className="row pb cover">
                        <div className="col-xs-12 col-md-6">
                          <div ref="funeral">
                            <h4 className="pbh">Funeral</h4>
                            <p>Get funeral cover in 10 minutes, for you and your familiy.</p>
                          </div>
                          <div className="container-fluid breakdown">
                            <div className="row"><div className="col-xs-6">Funeral cover</div>           <div className="col-xs-6">R20,000</div></div>
                            <div className="row"><div className="col-xs-6">Adults covered</div>          <div className="col-xs-6">2</div></div>
                            <div className="row"><div className="col-xs-6">Children covered</div>        <div className="col-xs-6">5</div></div>
                            <div className="row"><div className="col-xs-6">Monthly cost</div>            <div className="col-xs-6">R42</div></div>
                          </div>
                        </div>
                        <div className="col-xs-12 col-md-6">
                          <div ref="combo">
                            <h4 className="pbh">Combo deal</h4>
                            <p>Get a tailored combination of life, disability and funeral cover.</p>
                          </div>
                          <div className="container-fluid breakdown">
                            <div className="row"><div className="col-xs-6">Life cover</div>             <div className="col-xs-6">R400,000</div></div>
                            <div className="row"><div className="col-xs-6">Disability</div>             <div className="col-xs-6">R800,000</div></div>
                            <div className="row"><div className="col-xs-6">Family funeral</div>         <div className="col-xs-6">R20,000</div></div>
                            <div className="row"><div className="col-xs-6">Monthly cost</div>    <div className="col-xs-6">R114</div></div>
                          </div>
                        </div>
                      </div>
                    </Equalizer>

                    <div className="row pb">
                      <div className="col-xs-12"><Button {...buttonQuote} /><Button {...buttonCall} /></div>
                    </div>

                </div>
              </div>
            </Equalizer>
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
      category,
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
