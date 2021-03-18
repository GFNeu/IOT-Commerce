import React, {useState, useEffect} from 'react'
import Rating from 'react-rating'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Spinner from 'react-bootstrap/Spinner'
import axios from 'axios'


const RatingByProduct = ({product}) => {
    const [rating, setRating] = useState(null)
    const [existsRating, setExistsRating] = useState(false)
 

    useEffect(()=>{
        
            axios.get(`/api/products/${product.id}/reviews`).then(res=> res.data)
            .then((revs)=>{
                if(revs.length){
                    const r = revs.reduce((acc, item)=> {return acc += item.puntaje},0)/revs.length
                    setRating(r)
                    setExistsRating(true)
                } else {
                    setRating(0)
                    setExistsRating(true)
                }
            })
        
    },[])

    return (
        <>
            {existsRating? (
                    <Rating 
                        readonly 
                        initialRating={rating}
                        emptySymbol={<FaRegStar style={{color: "#cfcfcf"}}/>}
                        fullSymbol={<FaStar style={{color: "#ffc107"}}/>}
                        fractions={2}
                    /> )
                    : <Spinner animation="border" size="sm" />
            }
        </>
    )
}

export default RatingByProduct
