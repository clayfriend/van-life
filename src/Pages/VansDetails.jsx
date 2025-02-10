import { useParams,Link, useLocation } from "react-router-dom"
import {useState, useEffect } from "react"

export default function VansDetails(){
    const [van, setVan]=useState(null)

    const location=useLocation();
    const searchParams= location.state?.search ||""
    const backToPrev=searchParams?`/vans?${searchParams}`: "/vans"

    const querySearch = new URLSearchParams(searchParams)
    const typeFilter=querySearch.get("type")
    const backType= typeFilter?`Back to ${typeFilter} vans`: "Back to all vans"

    const params = useParams()

     useEffect(()=>{
         fetch(`/api/vans/${params.id}`)
          .then(res=>res.json())
          .then(data=>setVan(data.vans))
     }, [params.id])


    return(
        <div className="van-detail-container">
            <Link 
             to={backToPrev}
             relative="path"
             className="back-button">
               &larr;<span>{backType}</span> 
            </Link>
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}