import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';

const LandingIcon = ({ url, iconName, iconClass }) => {
  let icon = '';
  if (iconName === 'faLinkedin') {
    icon = faLinkedin;
  } else if (iconName === 'faGithub') {
    icon = faGithub;
  } else if (iconName === 'faCube') {
    icon = faCube;
  }

  return (
    <div className='Landing-social-links'>
      <a
        href={url}
        rel='noopener noreferrer'
        target='_blank'
        aria-label='Go to my social links'
      >
        <FontAwesomeIcon icon={icon} className={iconClass} aria-hidden='true' />
      </a>
    </div>
  );
};

export default LandingIcon;
