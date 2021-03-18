import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import s from './PastOrdersStyle.module.css'
import Fotitos from './Fotitos'


const dateFormater = (date)=>{
    let d = date.split("T")[0].split("-")
    return d[2] + "-" + d[1] + "-" + d[0] 
}


const PastOrders = () => {
    const [orders, setOrders] = useState([])
    const user = useSelector(state => state.user)
    useEffect(()=>{
        axios.get(`/api/users/orders/${user.id}`)
             .then(res => res.data)
             .then(o => setOrders(o))
    },[user])


    return (
      <Container className={s.cont}>
          
        {orders.length > 0 ? <h3>Mis compras: </h3> : <h3>Todavía no realizaste ninguna compra...</h3>}
        <hr/>
        {orders.length > 0 && orders.map(o => (
        <Card key={o.id} className={s.card}>
          <Card.Header>ID de la compra: {o.id}</Card.Header>
          <Card.Body >
            <Container fluid>
              <Row>
                <Col sm={12} md={6} lg={5}>
            <Card.Title>Precio total: ${o.products.reduce((acc, prod)=>{return acc += prod.price},0)}</Card.Title>
            <Card.Text>
              Cantidad de productos: {o.products.length}
            </Card.Text>
            <Card.Text>
              Fecha de compra: {dateFormater(o.updatedAt)}
            </Card.Text>
            <Card.Text>
              Status: {o.orderStatus.statusType}
            </Card.Text>
            </Col>
            <Col sm={12} md={6} lg={5}><Fotitos products={o.products}/></Col>
            
            <Col><Link to={`/pastOrders/${o.id}`}><Button variant="secondary" className="align-self-start">Ver detalles</Button></Link></Col>
            </Row>
            </Container>
          </Card.Body>
        </Card>))}
      </Container>
    )
}

export default PastOrders
