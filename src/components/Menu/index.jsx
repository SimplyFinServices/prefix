import React from 'react';
import Link from 'gatsby-link'
import Headroom from 'react-headroom'
import { rhythm } from '../../utils/typography'
import logo from './logo.svg';
import './style.scss';

const Menu = () => {
   return (
        <Headroom>
          <header>
            <nav>
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
          </header>
        </Headroom>
   );
};

export default Menu;