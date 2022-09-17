import React from 'react';
import { Button } from 'react-bootstrap';

const Welcome = ({ welcomeImg, welcomeCorner, buttonIcon, logInCallback }) => {
  if (welcomeImg && welcomeCorner && buttonIcon) {
    return (
      <div className="Welcome">
        <div>
          <img src={welcomeImg} className="Welcome-logo" alt="logo" />
          <p className="text-white">Самая вкусная пицца в WEB3</p>
          <Button
            onClick={() => logInCallback(1)}
            variant="outline-light"
            className="rounded-pill px-3 mt-3 connect-wallet-button"
          >
            <img src={buttonIcon} className="Button-logo" alt="logo" />
            Подключить кошелек
          </Button>
        </div>
        <img src={welcomeCorner} className="Welcome-corner" alt="logo" />
        <div className="footer-copyright text-center py-3 Text-bottom">
          <p className="text-white">Powerd by LoyaniX ©</p>
        </div>
      </div>
    );
  }
  return null;
};

export default Welcome;
