import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getReviewsByProduct } from '../state/reviews'


const Reviews = ( {id} ) => {
    //console.log(id);
    const dispatch = useDispatch()

    const reviews = useSelector(state => state.reviews)

    useEffect(()=>{
        dispatch(getReviewsByProduct(id))
    },[dispatch])

  
return (
<>

{console.log(reviews)}

{reviews.length ?
    <>
        <div className='row justify-content center mt-3 ml-5'>
            <h4><b>REVIEWS</b></h4>
        </div>
        
        <table className="table mt-2 text-center">
            <thead >
                <tr>
                    <th scope="col">Product Id</th>
                    <th scope="col">Description</th>
                    <th scope="col">Rating</th>
              
                </tr>
            </thead>
            <tbody>
                {reviews.map(review=>(
                     <tr key={review.id}>
                        <th scope="row">{id}</th>
                        <td>{review.descripcion}</td>
                        <td>{review.puntaje}</td>
                    </tr>
                )

                )}
               
                
            </tbody>
        </table>
    </>
    : <div className='row justify-content center mt-3 ml-5'><b>Este producto no tiene reviews</b></div>}    
</>

)
}

export default Reviews
