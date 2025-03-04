import { RESTRO_INFO } from "./constants";
import { useState, useEffect } from "react";

const useRestroMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null)

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        const data = await fetch(RESTRO_INFO+resId);
        const json = await data.json()
        setResInfo(json.data) 
    }
    return resInfo
}

export default useRestroMenu