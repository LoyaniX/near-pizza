import React from 'react';

const Categories = () => {
  const [activeCategory, setActiveCategory] = React.useState(0);

  const categoryNames = ['Все', 'Мясные', 'Вегетарианские', 'Острые', 'Закрытые'];

  const onClickCategory = (index) => {
    setActiveCategory(index);
  };

  return (
    <div className="categories">
      <ul>
        {categoryNames.map((value, index) => (
          <li
            key={value}
            onClick={() => onClickCategory(index)}
            className={activeCategory === index ? 'active' : ''}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
