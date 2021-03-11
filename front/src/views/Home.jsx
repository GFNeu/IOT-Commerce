import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carrousel from '../components/Carrousel.jsx'
import Container from 'react-bootstrap/Container'
import DisplayCursos from '../components/DisplayCursosHome'
import {createUseStyles} from 'react-jss'
import curso1 from '../assets/curso1.jpg'
import curso2 from '../assets/curso2.png'
import curso3 from '../assets/curso3.png'

const useStyles = createUseStyles({
    root: {
        maxWidth: 1500
    },
  })

const cursos = [{id: 1, name: "Arduino 101", description: "Aprenda todo sobre Arduino", img: curso1},
                {id: 2, name: "Smart-tostadora", description: "¿Cómo hacer una smart-tostadora?", img: curso2},
                {id: 3, name: "RaspBerry", description: "RaspBerry Pi para principiantes", img: curso3}]



const Home = () => {
    const classes = useStyles()




    return (
        <Container fluid className={classes.root}>
            <Carrousel />
            <DisplayCursos cursos={cursos}/>
        </Container>
    )
}

export default Home
