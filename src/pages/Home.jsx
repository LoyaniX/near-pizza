import React from 'react';
import Sort from '../components/Sort';
import Pizza from '../components/pizza/Pizza';
import Categories from '../components/Categories';
import Sceleton from '../components/pizza/Skeleton';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'возрастанию популярности',
    sortProprty: 'rating',
    type: 'asc',
  });

  React.useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sortType.sortProprty;
    const order = sortType.type;

    fetch(
      `https://63238c5b5c1b43572797b48f.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
    )
      .then((resp) => resp.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(id) => setCategoryId(id)} />
        <Sort value={sortType} onChangeSortType={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Sceleton key={index} />)
          : items.map((obj) => <Pizza key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
