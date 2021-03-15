import React from 'react'
import {createUseStyles} from 'react-jss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaShippingFast } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";


const useStyles = createUseStyles({
   cont1: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: ".5rem",
        backgroundColor: "white",
        padding: "1em",
        borderRadius: 4,
        border: "1px solid #f0f0f0",
        borderBottomColor: "#e0e0e0",
        flexWrap: "wrap"
        
   },
   cont2: {
       display: "flex", 
       justifyCOntent: "center",
       flexDirection: "column",
       marginLeft: ".5em"
   },
   contIcon:{
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 60,
    marginRight: ".5em",
    marginLeft: 15
   },
   contIcon2: {
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 60,
    marginRight: ".5em",
    marginLeft: 15,
   },
   icon:{
       fontSize: "4rem",
   },
   icon2:{
        fontSize: "3.4rem",
   },
   title:{
        fontWeight: "bold",
        
   },
   description: {
        color: "gray",
        margin: 0
   }

  })



const Banner = () => {
    const classes = useStyles()
    return (
        <Container fluid="lg">
            <Row noGutters>
                <Col xs={12} md className={classes.cont1}>
                        <div className={classes.contIcon}><FaShippingFast className={`${classes.icon} text-primary`}/></div>
                        <div className={classes.cont2}>
                            <h4>Envíos en el día</h4>
                            <p className={classes.description}>Comprando antes de las 12:00hs</p>
                        </div>
                </Col>
                <Col xs={12} md className={classes.cont1}>
                        <div className={classes.contIcon2}><FaDollarSign className={`${classes.icon2} text-primary`}/></div>
                        <div className={classes.cont2}>
                            <h4>Precio más bajo</h4>
                            <p className={classes.description}>Tenemos los mejores precios</p>
                        </div>
                </Col>
                <Col xs={12} md className={classes.cont1}>
                        <div className={classes.contIcon}><RiCustomerService2Fill className={`${classes.icon} text-primary`}/></div>
                        <div className={classes.cont2}>
                            <h4>0800-222-IOTC</h4>
                            <p className={classes.description}>Servicio post venta 24hs</p>
                        </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Banner
