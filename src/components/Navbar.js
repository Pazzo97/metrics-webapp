import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faMicrophone,
  faCog,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header>
      <nav>
        <div
          style={{ cursor: 'pointer' }}
          aria-hidden
          onClick={() => navigate(-1)}
        >
          <span className="leftNav">
            <FontAwesomeIcon icon={faChevronLeft} />
            Africa
          </span>
        </div>
        <div>
          <span className="middleNav">Get to know about Africa</span>
        </div>
        <div>
          <span className="rightNav">
            <FontAwesomeIcon icon={faMicrophone} />
            <FontAwesomeIcon icon={faCog} />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
