import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
    } = resData?.data;
    return (
      <div className="p-4 m-4 w-[230px] rounded-lg bg-pink-100 hover:bg-pink-500" >
        <img
          className="rounded-lg"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold py-3 text-xl">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} min</h4>
      </div>
    );
  };

  export default ResturantCard;