import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carrousel from '../components/Carrousel.jsx'
import Container from 'react-bootstrap/Container'
import curso1 from '../assets/curso1.png'
import curso2 from '../assets/curso2.png'
import curso3 from '../assets/curso3.png'



const Home = () => {
    return (
        <Container>
            <Carrousel />
           
        </Container>
    )
}

export default Home
