import { useEffect, useState } from "react";

const User = (props)=>{
    const {name}=props
    const[count]=useState(0)
    const[count2]=useState(2)

    useEffect(()=>{
        //Api calls
    },[]);
    
    return(
        <div className="user-card">
            <h1>count:{count}</h1>
            <h1>count2:{count2}</h1>
            <h1>Name:{name}</h1>
            <h3>Location:Mumbai</h3>
            <h3>Contact:@Samreen12</h3>

        </div>
    )
}
export default User;