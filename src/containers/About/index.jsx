import React, { Component } from 'react';
import Picture from '../../assets/images/me.png';
import {
  MapMarkerIcon,
  PhoneIcon,
  AtIcon,
  FileDownloadIcon
} from '../../components/Icons';
import './style.css';

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="content">
          <div className="profile">
            <img
              className="profile-picture"
              src={Picture}
              alt="Tim Baker Profile Pic"
            />
          </div>
          <div className="bio">
            <h2>About me</h2>

            <p>
              I&apos;m a backend developer with some frontend development
              experience. I have five years working as a developer and ten years
              working in the IT market and currently, I work as a .NET
              development consultant at{' '}
              <a
                href="http://www.esx.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ESX Company
              </a>
              , a Microsoft and AWS partner. As an enthusiast about software
              engineering, test strategies, and agile development, I talk about
              these topics in events and I write about on my{' '}
              <a
                href="https://medium.com/seguim"
                target="_blank"
                rel="noopener noreferrer"
              >
                blog
              </a>
              .
            </p>

            <p>
              A little more about me, I like rock&apos;n&apos;roll (zz top, zakk
              wylde and other of that genre). I&apos;m also bariatric, almost
              converted to vegetarianism, lover of the universe of superheroes,
              and not less important, supporter of causes that involves
              diversity.
            </p>

            <div className="contact-details">
              <h2>Contact Details</h2>

              <address>
                <ul>
                  <li>
                    <span>
                      <MapMarkerIcon />
                    </span>
                    Sao Paulo, SP - Brazil, 04205-000
                  </li>
                  <li>
                    <span>
                      <PhoneIcon />
                    </span>
                    +55 11 982-646-822
                  </li>
                  <li>
                    <span>
                      <AtIcon />
                    </span>
                    <a href="mailto:fernando.seguim@gmail.com">
                      fernando.seguim@gmail.com
                    </a>
                  </li>
                </ul>
              </address>
            </div>
            <div className="resume-download">
              <a
                href="https://seguim-my.sharepoint.com/:b:/g/personal/fernando_seguim_it/EXkcvK0tcLpOl06qEqh6GhUBjrO88z2WTF_jzBtvUXoy2w?e=nlJohU"
                className="download-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileDownloadIcon />
                &nbsp;Download my resume
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
