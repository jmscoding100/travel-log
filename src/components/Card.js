import { FaHeart } from "react-icons/fa6";



const Card=(props)=>{
    
    
    
    
    
    return(
        <div className="col">
            <div className="card travel-card h-100">
                <img src={props.imgUrl} alt={props.alt} className="img-fluid image card-img-top rounded" />
                <div className="card-header">
                    <h2 className="card-heading display-3">{props.location}</h2>
                    </div>
                <div className="card-body">
                    <p className="card-text">{props.year} </p>
                    <p className="card-text description">{props.description}</p>
                </div>
                    <div className="card-footer">
                            {props.isFavorite ? <FaHeart /> : null}
                    </div>
            </div>
        </div>
    )
}

export default Card