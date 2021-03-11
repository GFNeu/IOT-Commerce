import React, {useState} from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './DisplayProductsHome.css'
import {createUseStyles} from 'react-jss'
import ProductCard from './ProductCardHome'

const useStyles = createUseStyles({
    root: {
        display: "block",
        marginTop: "1rem",
        marginBottom: "2rem",
        boxSizing: "border-box",
        backgroundColor: "white",
        padding: "2rem",
        width: "100%",
       
    },
    title: {
        fontWeigth: "bolder"
    },
    menuArrow: {
        padding: "20px",        
        cursor: "pointer",
        fontWeight: "bold"
    },
    menu: {
      width: "100%",
      display: "block"
    }

  })

  const Menu = (list, selected) => list.map(el => {
                 return <ProductCard {...el} key={el.id}/>;
                });

  
  const Arrow = ({ text, className }) => {
    return (
      <div
        className={className}
      >{text}</div>
    );
  };

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });


const DisplayProductsHome = ({productos}) => {
    const classes = useStyles()
    const [menuItems, setMenuItems] = useState(Menu(productos)) //reemplazar list por productos
  
    const onSelect = key => {
        //this.setState({ selected: key });
        console.log("hola")
      }

      const menu = menuItems;

    return (
        <div className={classes.root}>
            <h4 className={classes.title}>Productos destacados</h4>
            <ScrollMenu
            data={menu}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            onSelect={onSelect}
            className={classes.menu}
          />
        </div>
    )
}

export default DisplayProductsHome
