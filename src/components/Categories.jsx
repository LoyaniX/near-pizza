import React from 'react';

const Categories = ({ value, onChangeCategory }) => {
  const categoryNames = ['Все', 'Мясные', 'Вегетарианские', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categoryNames.map((categoryName, index) => (
          <li
            key={categoryName}
            onClick={() => onChangeCategory(index)}
            className={value === index ? 'active' : ''}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
