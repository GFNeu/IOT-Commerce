import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carrousel from '../components/Carrousel.jsx'
import Container from 'react-bootstrap/Container'
import DisplayCursos from '../components/DisplayCursosHome'
import {createUseStyles} from 'react-jss'
import DisplayProducts from '../components/DisplayProductsHome'
import Banner from '../components/Banner.jsx'

const useStyles = createUseStyles({
    root: {
        maxWidth: 1500,
        display: "flex",
        flexDirection: "column"
    },
  })

const cursos = [{id: 1, name: "Arduino 101", description: "Aprenda todo sobre Arduino", img: "https://p4.wallpaperbetter.com/wallpaper/376/232/44/arduino-logo-black-hd-wallpaper-wallpaper-preview.jpg"},
                {id: 2, name: "Smart-tostadora", description: "¿Cómo hacer una smart-tostadora?", img: "https://sketchingwithhardware.files.wordpress.com/2013/08/img_52251.jpg"},
                {id: 3, name: "RaspBerry", description: "RaspBerry Pi para principiantes", img: "https://www.realdroid.es/wp-content/uploads/2016/10/LogoRaspi.jpg"}]

// list of items
const productos = [
    { id: 1, name: 'Arduino Uno R3 original', price: "$80", img: "https://www.geekfactory.mx/wp-content/uploads/arduino-uno-r3.jpg", rating: "4.5" },
    { id: 2,name: 'Carcasa metálica con ventilador para Raspberry Pi 4 DFRobot', price: "$999", img: "https://www.geekfactory.mx/wp-content/uploads/2020/03/carcasa-o-gabinete-metalico-con-ventilador-para-raspberry-pi-4-dfrobot.jpg", rating: "3" },
    { id: 3,name: 'Memoria micro SD 64 GB para Raspberry Pi o Arduino', price: "$5362", img: "https://www.geekfactory.mx/wp-content/uploads/memoria-micro-sd-64-gb-para-raspberry-pi-o-arduino.jpg", rating: "2" },
    { id: 4,name: 'Arduino Uno R3 original', price: "$80", img: "https://www.geekfactory.mx/wp-content/uploads/arduino-uno-r3.jpg", rating: "4.5" },
    { id: 5,name: 'Carcasa metálica con ventilador para Raspberry Pi 4 DFRobot', price: "$999", img: "https://www.geekfactory.mx/wp-content/uploads/2020/03/carcasa-o-gabinete-metalico-con-ventilador-para-raspberry-pi-4-dfrobot.jpg", rating: "3" },
    { id: 6,name: 'Memoria micro SD 64 GB para Raspberry Pi o Arduino', price: "$5362", img: "https://www.geekfactory.mx/wp-content/uploads/memoria-micro-sd-64-gb-para-raspberry-pi-o-arduino.jpg", rating: "2" },
    { id: 7,name: 'Arduino Uno R3 original', price: "$80", img: "https://www.geekfactory.mx/wp-content/uploads/arduino-uno-r3.jpg", rating: "4.5" },
    { id: 8,name: 'Carcasa metálica con ventilador para Raspberry Pi 4 DFRobot', price: "$999", img: "https://www.geekfactory.mx/wp-content/uploads/2020/03/carcasa-o-gabinete-metalico-con-ventilador-para-raspberry-pi-4-dfrobot.jpg", rating: "3" },
    { id: 9,name: 'Memoria micro SD 64 GB para Raspberry Pi o Arduino', price: "$5362", img: "https://www.geekfactory.mx/wp-content/uploads/memoria-micro-sd-64-gb-para-raspberry-pi-o-arduino.jpg", rating: "2" }
    
  ];

const Home = () => {
    const classes = useStyles()




    return (
        <Container fluid className={classes.root}>
            <Carrousel />
            <DisplayCursos cursos={cursos}/>
            <Banner />
            <DisplayProducts productos={productos}/>
        </Container>
    )
}

export default Home
