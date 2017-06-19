import React from "react"
import Link from "gatsby-link"
import { rhythm, scale } from "../utils/typography"

import Menu from '../components/Menu';
import Home from '../components/Home';
import Examples from '../components/Examples';

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <div>
        <Menu />
        <Home />
        <Examples />
        {children()}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.function,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
