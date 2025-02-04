import  {useEffect,useState} from "react";

export default function Vans(){
    const [vans, setVans]=useState([])

    useEffect(()=>{
        fetch("/api/vans")
        .then((res) =>res.json())
        .then ((data)=>setVans(data.vans)
         )   
    }, [])
    console.log(vans)
    
    const elementsVan= vans.map(van=>(
        <div key={van.id} className="van-tile">
            <img src={van.imageUrl} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            
            
        </div>
    ))
  

    return (
        <div className="van-list-container">
            <div className="van-list">
                {elementsVan}
            </div>
        </div>
    )
}