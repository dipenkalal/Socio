import { Grid } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ menuItems, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen]);

  return (
    <div className="dropdown" ref={ref}>
      <button onClick={(e) => setIsOpen(!isOpen)} 
              className="navbar-button">
        {label}
      </button>
      {isOpen && (
        <div className="dropdown__menu">
          {menuItems.map((menuItem, index) => (
            <Link to={menuItem.to} 
                  key={index} 
                  className="dropdown__item">
              {menuItem.name}
            </Link>
          ))}
        </div>
      )}
    </div>
    
  );
};

export default Dropdown;
