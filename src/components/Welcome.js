import React from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';

const Cover = ({ welcomeImg, welcomeCorner }) => {
  if (welcomeImg) {
    return (
      <div className="Welcome">
        <div>
          <img src={welcomeImg} className="Welcome-logo" alt="logo" />
          <p>Самая вкусная пицца в WEB3</p>
          <Button onClick="" variant="outline-light" className="rounded-pill px-3 mt-3">
            Connect Wallet
          </Button>
        </div>
        <img src={welcomeCorner} className="Welcome-corner" alt="logo" />
        <div class="footer-copyright text-center py-3 Text-bottom">
          <p>Powerd by LoyaniX ©</p>
        </div>
      </div>
    );
  }
  return null;
};

export default Cover;
