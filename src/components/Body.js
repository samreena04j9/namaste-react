import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const[listOfResturants,setListOfResturants]=useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" 
          onClick={() => {
            const filteredList = listOfResturants.filter(
                (res)=>res.data.avgRating > 4
                );
                setListOfResturants(filteredList);
          }}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfResturants.map((restaurant) => (
          <ResturantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
