import  {useEffect,useState} from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans(){
    const [vans, setVans]=useState([])
    const [searchParams, setSearchParams]= useSearchParams()

    const typeFilter = searchParams.get("type")

    
    useEffect(()=>{
        fetch("/api/vans")
        .then((res) =>res.json())
        .then ((data)=>setVans(data.vans)
         )   
    }, [])

    const displayedVan=typeFilter
            ?vans.filter(van=>van.type===typeFilter)
            :vans
  
    
    const elementsVan= displayedVan.map(van=>(
        <div key={van.id} className="van-tile">
        <Link 
        state={{ search:searchParams.toString() }}
        to={`/vans/${van.id}`}>
            <img src={van.imageUrl} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
            
        </div>
    ))

     function handleFilter(typeName){
        setSearchParams({type:typeName})
     }
  

    return (
        <div className="van-list-container">
            <button 
                 className={
                    `van-type simple 
                    ${typeFilter === "simple" ? "selected" : ""}`
                }
                onClick={()=>handleFilter("simple")}
            >Simple</button>
            <button
                 className={
                    `van-type luxury 
                    ${typeFilter === "luxury" ? "selected" : ""}`
                }
                 onClick={()=>handleFilter("luxury")}
            >Luxury</button>
            <button 
                className={
                    `van-type rugged 
                    ${typeFilter === "rugged" ? "selected" : ""}`
                }
                onClick={()=>handleFilter("rugged")}
            >Rugged</button>

            <br/>
            <br/>
            {typeFilter? (<button
                className="van-type clear-filters"
                onClick={()=>setSearchParams({})}
            >Clear filter</button>):null}
            <h1>Explore our Van options</h1>
            <div className="van-list">
                {elementsVan}
            </div>
        </div>
    )
}