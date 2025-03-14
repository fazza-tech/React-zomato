import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurentCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';


const Body = () => {

  const [restaurantList, setRestaurantList] = useState([])
  const [filteredRestaurent, setFilteredRestaurent] = useState([])

  const [searchtext, setSearchText] = useState("")

  useEffect(() => { fetchData() }, [])


  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const jsonData = await data.json()

    setRestaurantList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
    setFilteredRestaurent(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])

  }

  const onlineStatus = useOnlineStatus()

  if(onlineStatus === false){
    return (
      <h1>Please check your internet connection</h1>
    )
  }

  return restaurantList.length === 0 ? <Shimmer /> : (
    <div className="body">

      <div className='filter'>
        <div className='search'>
          <input type="text" className='search-input' value={searchtext} onChange={(e) => {
            setSearchText(e.target.value)
          }} />
          <button onClick={() => {
            setFilteredRestaurent(restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchtext)))
          }


          }>Search</button>
        </div>
        <button className='filter-btn'
          onClick={() => {
            const filteredRes = restaurantList.filter(res => res.info.avgRating > 4);
            setFilteredRestaurent(filteredRes)
          }}>
          Top rated Restaurents
        </button>

      </div>

      <div className="res-container">
      
        {  
          filteredRestaurent.map((restaurant) => (
            <Link 
            key={restaurant.info.id}
            to={"/restaurants/"+restaurant.info.id}>
              <RestaurantCard
                
                resData={restaurant}
              />
            </Link>
          )
          )
        }
      </div>
    </div>
  );
};

export default Body