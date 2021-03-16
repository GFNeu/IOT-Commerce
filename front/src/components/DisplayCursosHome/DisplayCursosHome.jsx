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


const DisplayCursosHome = ({cursos}) => {
    
    return (
      <Container fluid className={classes.root}>
        <Row noGutters>
        {cursos &&
          cursos.map((curso) => (
            <Col xs={12} md className={classes.col} key={curso.id}>
              <Link to={`/courses/${curso.id}`} className={classes.link}>
                  <div className={classes.imgCont}>
                    <Card.Img variant="top" src={curso.img} id={classes.photo} />
                    <Badge pill variant="warning" className={classes.badge}> Curso </Badge>
                  </div>
                  <div className={classes.cardContenido}>
                    <h3 className={classes.title}>{curso.name}</h3>
                    <h5 className={classes.description}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </h5>
                    <Link to={`/courses/${curso.id}`}><Button variant="link">Más información</Button></Link>
                  </div>
                
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    );
}

export default DisplayCursosHome
