import { useEffect, useState } from "react";
import { MENU_API,ENTER_URL } from "./constants";

const useResturantMenu = (resId) =>{
    const [resInfo,setResInfo]=useState(null)
    useEffect(()=>{
      fetchData();
    },[])

    const fetchData = async ()=>{
        const data = await fetch(MENU_API + resId +ENTER_URL);
        const json = await data.json()
        setResInfo(json.data)
    }
    return resInfo;
}
export default useResturantMenu;