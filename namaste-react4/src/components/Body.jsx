import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurentCard';
import Shimmer from './Shimmer';


const Body = () => {

    const [restaurantList,  setRestaurantList] = useState([])

    useEffect(() => {fetchData()},[])


    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

      const jsonData = await data.json()
      console.log(jsonData)
      setRestaurantList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])

    }

    //conditional rendering 
    // if(restaurantList.length === 0){
    //   return <Shimmer/>
    // }


    const cardMaping = restaurantList.map((restaurant) => (
      <RestaurantCard 
      key={restaurant.info.id} 
      resData={restaurant} />
    ))
    return restaurantList.length===0?<Shimmer/> : (
      <div className="body">
        
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