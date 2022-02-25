
 function Rating({rating} : {rating : number}) {
    return (
        <div className="rating">
            {Array(rating).fill(0).map(( _,i) =>  <i key={i} className="fas fa-star filled" />)}
            {Array(5 - rating).fill(0).map(( _,i) =>  <i key={i} className="fas fa-star" /> )}
           
            <span className="d-inline-block average-rating">({rating})</span>
        </div>
    )
}

export default Rating