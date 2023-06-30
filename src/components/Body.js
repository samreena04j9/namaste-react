import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log(json);
    //optional chaining
    setListOfResturants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };

  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search p-4 m-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-3 py-1 bg-green-200 m-4 rounded-lg"
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText)
              const filteredResturant = listOfResturants.filter((res) => 
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              
              );
              setFilteredRestaurant(filteredResturant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search p-4 m-4">
        <button
          className="px-3 py-1 bg-green-200 m-4 flrx items-center rounded-lg"
          onClick={() => {
            const filteredList = listOfResturants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfResturants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        </div>
       
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
         <Link  
            key={restaurant.data.id}
            to={"/restaurants/" + restaurant.data.id}
        > 
         <ResturantCard resData={restaurant} />
         </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
