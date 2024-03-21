import React from 'react';
import { BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
      <a href="https://github.com/krishna-kush" target="_blank" rel="noopener noreferrer">
    <div>
        <BsGithub />
    </div>
      </a>
    {/* <div>
      <a href="https://facebook.com/your_username" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://instagram.com/your_username" target="_blank" rel="noopener noreferrer">
        <BsInstagram />
      </a>
    </div> */}
  </div>
);

export default SocialMedia;