
import Shimmer from "./Shimmer";
import useRestroMenu from "../utils/useRestroMenu";
import {useParams} from "react-router-dom"

const RestroMenu = () => {


    const {resId} = useParams()

    const resInfo = useRestroMenu(resId)    
    if(resInfo === null) return <Shimmer/>

    const {name , cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info || {};

    const regularCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    const selectedCard = (regularCards?.[1]?.card?.card?.itemCards?.length >= 3)
        ? regularCards?.[1]  // ✅ Use cards[1] if it has 3 or more items
        : regularCards?.[3];  // ✅ Otherwise, switch to cards[3]
    
    const itemCard = selectedCard?.card?.card?.itemCards || [];
    

    

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage }</p>
            <ul>
                {itemCard.map(item => 
                <li  key = {item.card.info.id}>
                    {item.card.info.name} -
                    {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
            </ul>
        </div>
    )
}

export default RestroMenu