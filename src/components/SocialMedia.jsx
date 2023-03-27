import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href='https://twitter.com/21RojasKelvin' target='_blank' rel='noreferrer'>
      <BsTwitter />
    </a>
    </div>
    <div>
    <a href='https://www.linkedin.com/in/kelvin-rojas-chilin/' target='_blank' rel='noreferrer'>
      <BsLinkedin />
    </a>
    </div>
    <div>
      <a href='https://github.com/DevKelvin21' target='_blank' rel='noreferrer'>
       <BsGithub />
      </a>
    </div>
    <div>
      <a href='https://www.instagram.com/kelvinr21_/' target='_blank' rel='noreferrer'>
       <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
