import { useState } from 'react';
import {resList} from '../utils/restaurentList'
import RestaurantCard from './RestaurentCard';


const Body = () => {

    const [restaurantList,  setRestaurantList] = useState(resList)

    const cardMaping = restaurantList.map((restaurant) => (
      <RestaurantCard 
      key={restaurant.info.id} 
      resData={restaurant} />
    ))
    return (
      <div className="body">
        <div className="search-container">
          <input type="text" placeholder="Search Food or Restaurant" />
          <button>Search</button>
        </div>
        <div className='filter'>
            <button className='filter-btn' 
                    onClick={() => {
                      const filteredRes = restaurantList.filter(res => res.info.avgRating > 4);
                      setRestaurantList(filteredRes)
                    }}>
              Top rated Restaurents
              </button>

        </div>
        <div className="res-container">
          {cardMaping}
          
  
        
        </div>
      </div>
    );
  };

  export default Body