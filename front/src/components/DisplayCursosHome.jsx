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
        marginTop: "2rem",
        marginBottom: "2rem",
        alignItems: "stretch",
        maxWidth: 1300,
    },
    link:{
      width: "100%",
      maxWidth: 400,
      flexGrow: 1,
      color: "black",
      border: "1px solid #e6e6e6",
      borderRadius: 2,
      backgroundColor: "white",
      '&:hover':{
        textDecoration: "none",
        color: "black",
      }
    },
    imgCont: {
      overflow: "hidden",
      width: "100%",
      maxHeight:200,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2
    },
    img: {
        width: "100%",
        height: "auto",
    },
    cardContenido: {
      
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "3%"
    },
    title: {
      textTransform: "uppercase",
      fontWeight: "bolder"
    },
    description:{
      width: "100%",
      textAlign: "center"
    }

  })


const DisplayCursosHome = ({cursos}) => {
    const classes = useStyles()
    return (
      <Container fluid className={classes.root}>
        {cursos &&
          cursos.map((curso) => (
            <Link to={`/courses/${curso.id}`} className={classes.link} key={curso.id}>
              
                <div className={classes.imgCont}>
                  <Card.Img variant="top" src={curso.img} className={classes.img}/>
                </div>
                <div className={classes.cardContenido}>
                  <h3 className={classes.title}>{curso.name}</h3>
                  <h5 className={classes.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  </h5>
                  <Link to={`/courses/${curso.id}`}><Button variant="link">Más información</Button></Link>
                </div>
              
            </Link>
          ))}
      </Container>
    );
}

export default DisplayCursosHome
