import React from 'react'
import Container from 'react-bootstrap/Container'
import Link from 'react-router-dom'

const DisplayCursosHome = ({cursos}) => {
    return (
        <Container fluid>
            {
                cursos && cursos.map(curso => (
                   
                    <Link to={`/cursos/${curso.id}`} key={curso.id}>
                        <img src={curso.img} alt="cuso.name" title="curso.name"/>
                    </Link>
                   
                ))
            }
                
        </Container>
    )
}

export default DisplayCursosHome
