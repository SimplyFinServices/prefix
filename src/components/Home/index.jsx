import React, { Component } from 'react';
import Equalizer from 'react-equalizer';
import Button from '../Button';

import svg_3in1 from './3in1.svg';
import svg_10min from './10-min.svg';
import svg_abc from './abc.svg';
import svg_greatvalue from './great-value.svg';
import svg_handshake from './handshake.svg';
import svg_simplymoney from './simply-money.svg';

import './style.scss';

import sa from './sa.png';

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

class Home extends Component {
   render() {
      return (
        <section className="home">

            <div id="background-wrap">
                <div className="x1">
                    <div className="cloud"></div>
                </div>

                <div className="x2">
                    <div className="cloud"></div>
                </div>

                <div className="x3">
                    <div className="cloud"></div>
                </div>

                <div className="x4">
                    <div className="cloud"></div>
                </div>

                <div className="x5">
                    <div className="cloud"></div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-5 blurb">

                        <h3 className="push-down">Life insurance<br /><span className="green">Simply</span>-fied</h3>
                        <p className="intro">In 10 minutes, you could get instant cover and protect your family or employees. Insurance shouldn't be difficult, read more about our success <a href="#">#stories</a>.</p>
                        <p className="intro">Life and disability insurance provides for your family when you can't. How much your family will need is different for every person and you should not spend more than you can afford.</p>

                        <Button {...buttonQuote} />
                        <Button {...buttonCall} />

                    </div>
                    <div className="col-md-6 col-md-push-1 push-down quotes">
                        <div className="container-fluid why-simply">
                            <div className="row">
                                <Equalizer>
                                <div className="col-xs-6 col-md-4 why-1">
                                    <img src={svg_handshake} alt="Trusted insurer" />
                                    <span>Trusted insurer</span>
                                    <p>Policies are underwritten by Old Mutual Alternative Risk Transfer Limited.</p>
                                </div>
                                <div className="col-xs-6 col-md-4 why-2">
                                    <img src={svg_abc} alt="Easy to understand" />
                                    <span>Easy to understand</span>
                                    <p>Just 8 questions online, and policy documents you can understand.</p>
                                </div>
                                <div className="col-xs-6 col-md-4 why-3">
                                    <img src={svg_3in1} alt="3 in 1 combos" />
                                    <span>3 in 1 combos</span>
                                    <p><a href="/buy">Buy a combo</a> of life, disability and funeral policies starting from only R55/month.</p>
                                </div>
                                <div className="col-xs-6 col-md-4 why-4">
                                    <img src={svg_10min} alt="10 minute signup" />
                                    <span>10 minute sign up</span>
                                    <p>No paperwork. No blood tests. Instant cover. We can even <a href="#">call you</a> back.</p>
                                </div>
                                <div className="col-xs-6 col-md-4 why-5">
                                    <img src={svg_greatvalue} alt="Great value" />
                                    <span>Great value</span>
                                    <p><a href="/quote">Get a quote</a> – you could save up to 50% on your insurance.</p>
                                </div>
                                <div className="col-xs-6 col-md-4 why-6">
                                    <img src={svg_simplymoney} alt="Simply money" />
                                    <span>Simply money</span>
                                    <p>24 hour <a href="/claims">pay out</a> on funeral claims. R3,000 cash benefit. Optional cash back – 50%.</p>
                                </div>
                                </Equalizer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sa">
                <img alt="South African skyline" src={sa} />
            </div>
        </section>
      );
   }
}

export default Home;