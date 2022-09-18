import React from 'react';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Header from './Header';
import Cart from '../pages/Cart';

import Welcome from './Welcome';
import appLogo from '../assets/img/welcome-slice.svg';
import appFooterLogo from '../assets/img/welcome-corner.png';
import logInButtonLogo from '../assets/img/near_icon.png';
import { setAccauntId } from '../redux/slices/authenticateSlice';

import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const PizzaMarket = () => {
  const dispatch = useDispatch();
  const account = window.walletConnection.account();

  if (!account.accountId) {
    return (
      <Welcome welcomeImg={appLogo} welcomeCorner={appFooterLogo} buttonIcon={logInButtonLogo} />
    );
  }

  dispatch(setAccauntId(account.accountId));
  console.log(account.accountId);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/near-pizza" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default PizzaMarket;
