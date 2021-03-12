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
        boxSizing: "boder-box",
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "2rem",
        backgroundColor: "white",
        padding: "1.2rem",
        borderRadius: "2px",
        height: "100%",
        maxHeight: 130
   },
   cont2:{

   },
   icon:{
       display:"flex",
       justifyContent: "center",
       alignItems: "center",
       color: "#0046be",
       fontSize: "4rem",
       marginRight: "1.2rem"
   },
   title:{
        fontWeight: "bold"
   },
   description: {

   }

  })



const Banner = () => {
    const classes = useStyles()
    return (
        <Container>
            <Row noGutters>
                <Col>
                    <div className={classes.cont1}>
                        <div className={classes.icon}><FaShippingFast /></div>
                        <div>
                            <h4>Envíos en el día</h4>
                            <p>Comprando antes de las 12:00hs</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className={classes.cont1}>
                        <div className={classes.icon}><FaDollarSign /></div>
                        <div>
                            <h4>Precio más bajo</h4>
                            <p>Tenemos los mejores precios del mercado</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className={classes.cont1}>
                        <div className={classes.icon}><RiCustomerService2Fill /></div>
                        <div>
                            <h4>0800-222-IOTC</h4>
                            <p>Servicio post venta 24hs</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Banner
