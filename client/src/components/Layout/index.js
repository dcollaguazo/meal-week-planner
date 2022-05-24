import React from 'react';
import NavBar from '../NavBar';
import './styles.css';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className='Layout-content'>{children}</div>
    </div>
  );
};

export {Layout};