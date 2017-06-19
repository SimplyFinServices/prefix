import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from "gatsby-link"
import Button from '../Button';

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

class Card extends Component {

   render() {

   const {
      cardTitle,
      cardDescription,
      cardImage,
      cardLifeCover,
      cardDisabilityCover,
      cardFuneralCover,
      cardLink
   } = this.props; 

      return (
         <div className="col-md-push-1 col-md-5">
            <h3>{cardTitle}</h3>
            <div className="card family">
                  <div className="card-image">
                     <div className="card-image-inner">
                        <img src={cardImage} alt={cardTitle} />
                     </div>
                  </div>
                  <div className="description">
                     <p>{cardDescription}</p>
                      <Link className="more" to={cardLink}>Find out more</Link>
                  </div>
                  <div className="details container-fluid">
                     <div className="details-inner">
                        <div className="row"><div className="col-xs-12 col-md-6">Life cover</div><div className="col-xs-12 col-md-6">up to {cardLifeCover}</div></div>
                        <div className="row"><div className="col-xs-12 col-md-6">Disability cover</div><div className="col-xs-12 col-md-6">up to {cardDisabilityCover}</div></div>
                        <div className="row"><div className="col-xs-12 col-md-6">Family funeral cover</div><div className="col-xs-12 col-md-6">up to {cardFuneralCover}</div></div>
                     </div>
                  </div>                                
                  <div className="contact container-fluid">
                     <div className="row">
                        <div className="col-md-6 col-xs-6">
                           <Button {...buttonQuote} />
                        </div>
                        <div className="col-md-6 col-xs-6">
                           <Button {...buttonCall} />
                        </div>
                     </div>
                  </div>                      
            </div>
         </div>
      );
   }
}

Card.propTypes = {
   cardTitle: PropTypes.string,
   cardDescription: PropTypes.string,
   cardImage: PropTypes.string,
   cardLifeCover: PropTypes.string,
   cardDisabilityCover: PropTypes.string,
   cardFuneralCover: PropTypes.string,
   cardLink: PropTypes.string
};

export default Card;