import { useState, useEffect } from "react"
import Shimmer from "./Shimmer";
import { RESTRO_INFO } from "../utils/constants";
import {useParams} from "react-router-dom"

const RestroMenu = () => {

    const [resInfo , setResInfo] = useState(null)

    const {resId} = useParams()
    console.log(resId)

    useEffect(() => {
        fetchMenu() 
    },[])

    const fetchMenu = async () => {
        const data = await fetch(RESTRO_INFO+resId);
        const json = await data.json()

        setResInfo(json.data)
    }
    if(resInfo === null) return <Shimmer/>

    const {name , cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info || {};

    const itemCard = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || {};

    console.log(itemCard)

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