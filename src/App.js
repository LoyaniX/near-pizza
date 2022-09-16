import React from 'react';
import PizzaMarket from './components/PizzaMarket';
import Welcome from './components/Welcome';
import appLogo from './assets/img/welcome-slice.svg';
import appFooterLogo from './assets/img/welcome-corner.png';
import logInButtonLogo from './assets/img/near_icon.png';
import './scss/app.scss';
import './app.css';

const App = () => {
  const [isLogIn, setIsLogin] = React.useState(0);

  const updateData = (value) => {
    setIsLogin(value);
  };
  return isLogIn === 1 ? (
    <PizzaMarket />
  ) : (
    <Welcome
      welcomeImg={appLogo}
      welcomeCorner={appFooterLogo}
      buttonIcon={logInButtonLogo}
      logInCallback={updateData}
    />
  );
};

export default App;
