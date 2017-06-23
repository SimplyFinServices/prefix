import React from 'react';
import Link from 'gatsby-link'
import Headroom from 'react-headroom'
import { rhythm } from '../../utils/typography'
import logo from './logo.svg';
import './style.scss';
import classnames from 'classnames';

export default class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  click() {
    this.setState({open: !this.state.open});
  }

  render() {

  let classes = classnames({open: this.state.open});

   return (
        <Headroom>
          <header>
            <nav className={classes}>
              <ul className="nav nav-left">
                <li><Link to='/quote'><span>Get a quote</span></Link></li>
                <li><Link to='/call-me'><span>Call Me</span></Link></li>
                <li><Link to='/faq'><span>FAQ</span></Link></li>
              </ul>

              <Link className="logo" to='/'><img src={logo} alt="Simply" /></Link>

              <ul className="nav nav-right">
                <li><Link to='/about'><span>About</span></Link></li>
                <li><Link to='/testimonials'><span>Testimonials</span></Link></li>
                <li><Link to='/contact'><span>Contact</span></Link></li>
              </ul>

            </nav>

            <div id="burger" className={classes} onClick={this.click.bind(this)}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

          </header>
        </Headroom>
   );
  }
};
