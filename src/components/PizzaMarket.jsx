import React from 'react';
import Header from './Header';
import Sort from './Sort';
import Pizza from './pizza/Pizza';
import Categories from './Categories';
import Sceleton from './pizza/Skeleton';

const PizzaMarket = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://63238c5b5c1b43572797b48f.mockapi.io/items')
      .then((resp) => resp.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(6)].map((_, index) => <Sceleton key={index} />)
              : items.map((obj) => <Pizza key={obj.id} {...obj} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaMarket;
