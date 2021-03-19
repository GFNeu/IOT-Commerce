import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getReviewsByProduct } from '../state/reviews'
import Container from 'react-bootstrap/Container'

const Reviews = ( {id} ) => {
    //console.log(id);
    const dispatch = useDispatch()

    const reviews = useSelector(state => state.reviews)

    useEffect(()=>{
        dispatch(getReviewsByProduct(id))
    },[dispatch])

  
return (
<div className="w-100">

{console.log(reviews)}

{reviews.length ?
    <Container className="mt-4">
        <div className='m-2'>
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
    </Container>
    : <div className='d-flex row justify-content center mt-3 ml-5'><b>Este producto no tiene reviews</b></div>}    
</div>

)
}

export default Reviews
