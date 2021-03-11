import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {createUseStyles} from 'react-jss'


const useStyles = createUseStyles({
    root: {
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "1em",
        alignItems: "center"
    },
    img: {
        width: "100%",
        height: "auto",
        maxWidth: "350px"
    }

  })


const DisplayCursosHome = ({cursos}) => {
    const classes = useStyles()
    return (
      <Container fluid className={classes.root}>
        {cursos &&
          cursos.map((curso) => (
            <Card key={curso.id}>
              <Card.Img variant="top" src={curso.img} className={classes.img}/>
              <Card.Body>
                <Card.Title>{curso.name}</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </Card.Text>
                <Button variant="link">Go somewhere</Button>
              </Card.Body>
            </Card>
          ))}
      </Container>
    );
}

export default DisplayCursosHome
