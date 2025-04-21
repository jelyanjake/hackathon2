import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import menuIcon from '../assets/menu-burger.png';
import usersIcon from '../assets/users.png'
import histIcon from '../assets/hist.gif';
import intIcon from '../assets/diagram.gif';
import homeIcon from '../assets/home.gif';
import './menupopup.css';

const MenuPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleItemClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className="menu-container" ref={menuRef}>
      <button 
        className="menu-button" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <img src={menuIcon} alt="" />
      </button>

      {isOpen && (
        <div className="popup">
          <ul>
          <li onClick={() => handleItemClick('/')}>
              <img src={homeIcon} alt="Home" className="menu-icon" />
              <span>Home</span>
            </li>
            <li onClick={() => handleItemClick('/interviews')}>
              <img src={intIcon} alt="Interview" className="menu-icon" />
              <span>Interview</span>
            </li>
            <li onClick={() => handleItemClick('/history')}>
              <img src={histIcon} alt="Users" className="menu-icon" />
              <span>History</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuPopup;