import React, { Component, PropTypes } from 'react';
import Link from "gatsby-link"
import './style.scss';

import omLogo from './om_logo.png';
import simplyLogo from './simply_logo.png';

import twitterLogo from './twitter.svg';
import facebookLogo from './facebook.svg';
import instagramLogo from './instagram.svg';

class Footer extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<footer>
	        	<div className="container">
	        		<div className="row">
	        			<div className="col-xs-6 col-md-3">
	        				<ul>
	        					<li><Link to="/">Home</Link></li>
	        					<li><Link to="/quote">Get a quote</Link></li>
	        					<li><Link to="/call-me">Call me</Link></li>
	        					<li><Link to="/protect-family">Protect your family</Link></li>
	        					<li><Link to="/protect-employees">Protect your employees</Link></li>
	        					<li><Link to="/faq">FAQ</Link></li>
	        				</ul>
	        			</div>
	        			<div className="col-xs-6 col-md-3">
	        				<ul>
	        					<li><Link to="/about">About</Link></li>
	        					<li><Link to="/contact">Contact us</Link></li>
	        					<li><Link to="/privacy-policy">Privacy policy</Link></li>
	        					<li><Link to="/terms-conditions">Terms &amp; Conditions</Link></li>
	        					<li>
	        						Follow us <Link to="https://www.facebook.com/simplylifeinsurance/"><img className="social" src={facebookLogo} /></Link><Link to="https://twitter.com/SimplyLifeCover"><img className="social" src={twitterLogo} /></Link><Link to="https://www.instagram.com/simplylifeinsurance/"><img className="social" src={instagramLogo} /></Link>
	        					</li>
	        					<li><a href="tel:+27210451393">Call us on 021 045 1393</a></li>
	        				</ul>
	        			</div>

	        			<div className="col-xs-12 col-md-6">
	        				<div className="container-fluid">
	        					<div className="row logos">
				        			<div className="col-xs-6 col-md-6">
				        					<img className="simply" src={simplyLogo} alt="Simply" />
				        			</div>
				        			<div className="col-xs-6 col-md-6">
				        					<img className="old-mutual" src={omLogo} alt="Old Mutual" />
				        			</div>
	        					</div>
	        					<div className="row">
				        			<div className="col-xs-6 col-md-6">
				        				<p className="small">Simply financial services Pty(Ltd) is a registered financial services provider (FSP:47146)</p>
				        			</div>
				        			<div className="col-xs-6 col-md-6">
				        					<p className="small">Underwritten by Old Mutual Alternative Risk Transfer Ltd A registered Long-term Insurer</p>
				        			</div>
	        					</div>
	        				</div>
	        			</div>

	        		</div>
	        	</div>
        	</footer>
        );
    }
}

export default Footer;
