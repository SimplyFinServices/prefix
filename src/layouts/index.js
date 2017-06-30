import React from "react"
import Link from "gatsby-link"
import { rhythm, scale } from "../utils/typography"

import Footer from '../components/Footer';
import Menu from '../components/Menu';

class Template extends React.Component {
  render() {

    const { location, children } = this.props

    return (
      <div>
        <Menu />
        {children()}
        <Footer />
      </div>
    )
  }
}

Template.propTypes = {
  // children: React.PropTypes.function,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
