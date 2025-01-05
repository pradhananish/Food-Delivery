import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category = "All" }) => { 
  const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='food-display-list'>
        {food_list.map((item) => {
          console.log("Category:", category, "Item Category:", item.category);
          return category.toLowerCase() === "all" || item.category.toLowerCase() === category.toLowerCase() ? (
            <FoodItem
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
