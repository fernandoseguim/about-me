import React, { Component } from 'react';
import {
  ArrowCircleDownIcon,
  GithubIcon,
  LinkedInIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  WhatsappIcon,
  MediumIcon
} from '../../components/Icons';
import SocialMediaLink from '../../components/SocialMediaLink';

import NavBar from '../../components/NavBar';
import './style.css';

class Header extends Component {
  render() {
    return (
      <header id="home">
        <NavBar />

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I&apos;m Fernando Seguim,</h1>
            <h2>
              <span>backend developer</span> who ventures into frontend.
            </h2>
            <h3>
              I&apos;m an enthusiastic about software engineering, test
              strategies, and agile development.
            </h3>
            <h3>
              Oh yes, sure! I&apos;m also a panda lover{' '}
              <span role="img" aria-label="panda">
                🐼
              </span>{' '}
              ( seriously? ).
            </h3>
            <hr />
            <ul className="social">
              <li>
                <SocialMediaLink url="https://github.com/fernandoseguim">
                  <GithubIcon />
                </SocialMediaLink>
              </li>
              <li>
                <SocialMediaLink url="https://linkedin.com/in/fernandoseguim">
                  <LinkedInIcon />
                </SocialMediaLink>
              </li>
              <li>
                <SocialMediaLink url="https://medium.com/seguim">
                  <MediumIcon />
                </SocialMediaLink>
              </li>
              <li>
                <SocialMediaLink url="https://www.facebook.com/fernandoseguim">
                  <FacebookIcon />
                </SocialMediaLink>
              </li>
              <li>
                <SocialMediaLink url="https://twitter.com/fernandoseguim">
                  <TwitterIcon />
                </SocialMediaLink>
              </li>
              <li>
                <SocialMediaLink url="http://instagram.com/fernandoseguim">
                  <InstagramIcon />
                </SocialMediaLink>
              </li>
              <li>
                <SocialMediaLink url="https://api.whatsapp.com/send?l=pt_br&phone=5511982646822">
                  <WhatsappIcon />
                </SocialMediaLink>
              </li>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="link-more" href="#about">
            <ArrowCircleDownIcon />
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
