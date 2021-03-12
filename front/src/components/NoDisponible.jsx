import React from 'react'
import {createUseStyles} from 'react-jss'
const useStyles = createUseStyles({
    root: {
        height: 400,     
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        fontWeight: "bolder",
        fontSize: "2rem"
    }

  })


const NoDisponible = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            Disponible pronto en nuestro sitio
        </div>
    )
}

export default NoDisponible
