import { useEffect, useState } from 'react';
import {resList} from '../utils/restaurentList'
import RestaurantCard from './RestaurentCard';


const Body = () => {

    const [restaurantList,  setRestaurantList] = useState([])

    useEffect(() => {fetchData()},[])


    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

      const jsonData = await data.json()
      console.log(jsonData)
      setRestaurantList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    if(restaurantList.length === 0){
      return <h1>loading...</h1>
    }

    
    

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