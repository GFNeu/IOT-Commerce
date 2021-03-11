import React from 'react'
import {createUseStyles} from 'react-jss'
const useStyles = createUseStyles({
    root: {
        height: "5rem",
        backgroundColor: "#0046be",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
    }

  })

const Footer = () => {
    const classes = useStyles()
    return (
     <div className={classes.root}>
         Footer
     </div>
    );
}

export default Footer