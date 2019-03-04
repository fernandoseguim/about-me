import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowCircleDown,
  faMapMarker,
  faPhone,
  faAt,
  faFileDownload
} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, faArrowCircleDown, faMapMarker, faPhone, faAt, faFileDownload);

const ArrowCircleDownIcon = () => <FontAwesomeIcon icon="arrow-circle-down" />;
const MapMarkerIcon = () => <FontAwesomeIcon icon="map-marker" />;
const PhoneIcon = () => <FontAwesomeIcon icon="phone" />;
const AtIcon = () => <FontAwesomeIcon icon="at" />;
const FileDownloadIcon = () => <FontAwesomeIcon icon="file-download" />;

const FacebookIcon = () => <FontAwesomeIcon icon={['fab', 'facebook']} />;
const GithubIcon = () => <FontAwesomeIcon icon={['fab', 'github']} />;
const InstagramIcon = () => <FontAwesomeIcon icon={['fab', 'instagram']} />;
const TwitterIcon = () => <FontAwesomeIcon icon={['fab', 'twitter']} />;
const LinkedInIcon = () => <FontAwesomeIcon icon={['fab', 'linkedin']} />;
const WhatsappIcon = () => <FontAwesomeIcon icon={['fab', 'whatsapp']} />;
const MediumIcon = () => <FontAwesomeIcon icon={['fab', 'medium']} />;

export {
  ArrowCircleDownIcon,
  MapMarkerIcon,
  PhoneIcon,
  AtIcon,
  FileDownloadIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedInIcon,
  WhatsappIcon,
  MediumIcon
};
