import React, { Component } from 'react';
import {RouteHandler} from "react-router";
import { Link } from 'react-router'
import Card from '../Card';

import './style.scss';

import employee from './employee.jpg';
import family from './family.jpg';

const cardFamily = {
   cardTitle: 'Protect your family',
   cardDescription: 'You can sign up through a quick and easy online process and get a 10% discount, or get us to call you. You just need to answer a few simple health questions - no blood tests required.',
   cardImage: family,
   cardLifeCover: 'R1.5 million',
   cardDisabilityCover: 'R1.5 million',
   cardFuneralCover: 'R50,000',
   cardLink: 'family'
}

const cardEmployee = {
   cardTitle: 'Protect your employee',
   cardDescription: 'Simply Employer provides your employee with great value protection for their family. You can sign them up through a quick and easy online process, or get us to call you.',
   cardImage: employee,
   cardLifeCover: 'R200,000',
   cardDisabilityCover: 'R400,000',
   cardFuneralCover: 'R50,000',
   cardLink: 'employee'
}

class Examples extends Component {
   render() {
      return (
        <section className="examples">
            <div className="container">
                <div className="row">
                  <div className="col-md-12">
                     <h1>Get a quote in <span className="blue">10 seconds</span></h1>
                  </div>
               </div>
                <div className="row">
                  <Card {...cardFamily} />
                  <Card {...cardEmployee} />
                </div>
            </div>
        </section>
      );
   }
}

export default Examples;