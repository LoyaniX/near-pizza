import React from 'react';
import { Button } from 'react-bootstrap';

const Welcome = ({ welcomeImg, welcomeCorner, buttonIcon }) => {
  if (welcomeImg && welcomeCorner && buttonIcon) {
    return (
      <div classNameName="Welcome">
        <div>
          <img src={welcomeImg} classNameName="Welcome-logo" alt="logo" />
          <p>Самая вкусная пицца в WEB3</p>
          <Button onClick="" variant="outline-light" classNameName="rounded-pill px-3 mt-3">
            <img src={buttonIcon} classNameName="Button-logo" alt="logo" />
            Подключить кошелек
          </Button>
        </div>
        <img src={welcomeCorner} classNameName="Welcome-corner" alt="logo" />
        <div className="footer-copyright text-center py-3 Text-bottom">
          <p>Powerd by LoyaniX ©</p>
        </div>
      </div>
    );
  }
  return null;
};

export default Welcome;
