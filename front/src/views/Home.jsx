import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carrousel from '../components/Carrousel.jsx'
import Container from 'react-bootstrap/Container'
import DisplayCursos from '../components/DisplayCursosHome'
import {createUseStyles} from 'react-jss'
import DisplayProducts from '../components/DisplayProductsHome'

const useStyles = createUseStyles({
    root: {
        maxWidth: 1500
    },
  })

const cursos = [{id: 1, name: "Arduino 101", description: "Aprenda todo sobre Arduino", img: "https://p4.wallpaperbetter.com/wallpaper/376/232/44/arduino-logo-black-hd-wallpaper-wallpaper-preview.jpg"},
                {id: 2, name: "Smart-tostadora", description: "¿Cómo hacer una smart-tostadora?", img: "https://sketchingwithhardware.files.wordpress.com/2013/08/img_52251.jpg"},
                {id: 3, name: "RaspBerry", description: "RaspBerry Pi para principiantes", img: "https://www.realdroid.es/wp-content/uploads/2016/10/LogoRaspi.jpg"}]



const Home = () => {
    const classes = useStyles()




    return (
        <Container fluid className={classes.root}>
            <Carrousel />
            <DisplayCursos cursos={cursos}/>
            <DisplayProducts />
        </Container>
    )
}

export default Home
