import React from "react"
import Link from "gatsby-link"
import { rhythm, scale } from "../utils/typography"

import Examples from '../components/Examples';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Menu from '../components/Menu';

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    let Front = [];
    if(location.pathname == '/') {
      Front = <div><Home /><Examples /></div>
    }

    return (
      <div>
        <Menu />
        { Front }
        {children()}
        <Footer />
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
