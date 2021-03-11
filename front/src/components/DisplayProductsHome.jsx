import React, {useState} from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './DisplayProductsHome.css'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    root: {
        marginTop: "2rem",
        marginBottom: "2rem",
        boxSizing: "border-box",
        backgroundColor: "white",
        padding: "2rem"
    },
    title: {
        fontWeigth: "bolder"
    },
    menuArrow: {
        padding: "20px",        
        cursor: "pointer"
    }

  })

// list of items
const list = [
    { name: 'product1', price: "$80" },
    { name: 'product2', price: "$999" },
    { name: 'product3', price: "$5362" },
    { name: 'product4', price: "$66" },
    { name: 'product5', price: "$856" },
    { name: 'product6', price: "$336" },
    { name: 'product7', price: "$2584" },
    { name: 'product8', price: "$5628" },
    { name: 'product9', price: "$10.888" }
  ];

// One item component
// selected prop will be passed
const MenuItem = ({text, price}) => {
    return <div
      className={`menu-item`} 
      ><h5>{text}</h5><p>{price}</p></div>;
  };
  
  const Menu = (list, selected) => list.map(el => {
            const {name, price} = el;
            return <MenuItem text={name} key={name} price={price}/>;
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
    const [menuItems, setMenuItems] = useState(Menu(list)) //reemplazar list por productos
  
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
          />
        </div>
    )
}

export default DisplayProductsHome
