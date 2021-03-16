import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/Badge'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import classes from './DisplayCursosHome.module.css'
import {useSelector} from "react-redux"


const DisplayCursosHome = () => {
  const cursos= [
    {
      id: 37,
      name: "Motor a pasos tutorial introductorio",
      description: "El motor a pasos es un dispositivo que ha estado con nosotros un largo tiempo. Seguramente si desarmas una impresora..."
,
      photo: "https://www.geekfactory.mx/wp-content/uploads/2017/08/motor_a_pasos-1080x675.jpg"
    },
    {
      id: 38,
      name: "Pantalla alfanumérica LCD 16X2 con Arduino",
      description: "En este tutorial enseñaremos a utilizar la pantalla LCD 16X2 con Arduino. Abordaremos lo más básico: desde la conexión de la pantalla con el arduino, hasta mostrar cadenas de texto y..."
,


      photo: "https://www.geekfactory.mx/wp-content/uploads/2017/10/lcd_16x2_con_arduino_1-700x573.jpg"
    }, 
    {
      id: 39,
      name: "DS18B20 con Arduino: tutorial de sensor de temperatura digital",
      description: "El DS18B20 es un sensor de temperatura en el cual se lleva la conversión analógico a digital dentro del encapsulado...",
      photo: "https://www.geekfactory.mx/wp-content/uploads/2019/06/conexion-arduino-con-ds18b20-1024x865.jpg"
    }
  ]
 //Arreglar
    return (
      <Container fluid className={classes.root}>
        <Row noGutters>
        
          {cursos &&
          
          cursos.map(curso =>{
            return(  <Col xs={12} md className={classes.col}>
                <Link to={`/products/${curso.id}`} className={classes.link} key={curso.id}>
                    <div className={classes.imgCont}>
                      <Card.Img variant="top" src={curso.photo} id={classes.photo} />
                      <Badge pill variant="warning" className={classes.badge}> Curso </Badge>
                    </div>
                    <div className={classes.cardContenido}>
                      <h3 className={classes.title}>{curso.name}</h3>
                      <h5 className={classes.description}>
                        {curso.description}
                      </h5>
                      <Link to={`/products/${curso.id}`}><Button variant="link">Más información</Button></Link>
                    </div>
                  
                </Link>
              </Col>
            )
      
            
          })
          
          }

          </Row>
          
       
      </Container>
    );
}

export default DisplayCursosHome
