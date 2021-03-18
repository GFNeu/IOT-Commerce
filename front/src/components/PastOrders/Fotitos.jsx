import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {createUseStyles} from 'react-jss'
import {Link} from 'react-router-dom'

const useStyles = createUseStyles({
    imgCont:{
        width: 60,
        height: 60,
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        overflow: "hidden",
        boxShadow: "-1px 0px 1px 0px rgba(0,0,0,0.10)"
    },
    img:{
        width: "auto",
        height: "100%",
    },
    dots:{
        width: 60,
        height: 60,
        backgroundColor: "lightgray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
 
   })
 




const Fotitos = ({products}) => {
    const fotos = products.slice(0,3)
    const classes = useStyles()
    
    return (
        <Container className="m-3">
            <Row className="justify-content-md-start">
                {products.length && fotos.map(p => (
                    <Col key={p.id} md={2}><Link to={`/products/${p.id}`}><div className={classes.imgCont}><img src={p.photo} alt={p.name} title={p.name} className={classes.img}/></div></Link></Col>
                ))}
                {products.length > 3 && <span className={classes.dots}><span style={{textAlign: "center"}}>+{products.length-3}</span></span>}
            </Row>
        </Container>
    )
}

export default Fotitos
