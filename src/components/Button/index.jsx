import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from "gatsby-link"

import './style.scss';

import iconQuote from './quote.svg';
import iconPhone from './phone.svg';

class Button extends Component {
   render() {

   const {
      buttonColour,
      buttonText,
      buttonLink,
      buttonIcon
   } = this.props;      

      // this isnt great
      let icon = null;
      switch(buttonIcon) {
         case 'quote': icon = iconQuote;
         break;
         case 'phone': icon = iconPhone;
         break;
      }

      return (
         <Link to={buttonLink} className={`btn btn-${buttonColour}`}>
            <span>{buttonText}</span><img src={icon} />
         </Link>
      );
   }
}

Button.propTypes = {
   buttonLink: PropTypes.string,
   buttonText: PropTypes.string,
   buttonColour: PropTypes.string,
   buttonIcon: PropTypes.string
};

export default Button;