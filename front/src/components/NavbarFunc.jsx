
import React,{useState, useEffect, useRef} from 'react';
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";
import { BsPlusSquare } from "@react-icons/all-files/bs/BsPlusSquare";

import { SiMessenger } from "@react-icons/all-files/si/SiMessenger";
import { BiCog } from "@react-icons/all-files/bi/BiCog";
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import '../Navbar.css';


function NavbarFunc() {
    return (
      <nav className='navbar row'>
        <div className='col-12 col-md-3'>
          <div className='navbar-brand'><img src='./images/logo.png' /></div>
        </div>

			<div className='col-12 col-md-6 mt-2 mt-md-4'>
				<div className='input-group'>
					<input type='text' id='search_field' className='form-control'placeholder='Enter Product Name ...'/>
					<div className='input-group-append'>
						<button id='search_btn' className='btn'>
							search
						</button>
					</div>
				</div>
			</div>

			<div className='col-12 col-md-3 mt-4 mt-md-4 text-center'>
				<button className='btn' id='login_btn'> Login </button>

				<span id='cart' className='ml-3'>
					Cart
				</span>
				<span className='ml-1' id='cart_count'>
					2
				</span>
       
			</div>
      <Navbar>
       
        <NavItem icon={<BsPlusSquare />}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
		</nav> 
      
    );
}
  
function Navbar(props) {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    );
}
  
function NavItem(props) {
    const [open, setOpen] = useState(false);
  
    return (
      <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
        </a>
  
        {open && props.children}
      </li>
    );
}
  
function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }
  
    function DropdownItem(props) {
      return (
        <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
      );
    }
  
    return (
      <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
  
        <CSSTransition in={activeMenu === 'main'} timeout={500}
          classNames="menu-primary" unmountOnExit onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem leftIcon="🦧" rightIcon={<FaBeer />} goToMenu="animals">
              My Profile
            </DropdownItem>
            <DropdownItem leftIcon={<BiCog />} rightIcon={<FaBeer />} goToMenu="settings">
              Settings
            </DropdownItem>
            <DropdownItem leftIcon="🦧" rightIcon={<FaBeer />} goToMenu="animals">
              Categories
            </DropdownItem>
            <DropdownItem leftIcon="🦧" rightIcon={<FaBeer />} goToMenu="animals">
              Admin
            </DropdownItem>
  
          </div>
        </CSSTransition>
  
        <CSSTransition in={activeMenu === 'settings'} timeout={500} classNames="menu-secondary"
          unmountOnExit onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<AiOutlineArrowRight />}>
              Go Back
            </DropdownItem>
            <DropdownItem >HTML</DropdownItem>
            <DropdownItem >CSS</DropdownItem>
            <DropdownItem >JavaScript</DropdownItem>
           
          </div>
        </CSSTransition>
  
        <CSSTransition in={activeMenu === 'animals'} timeout={500} classNames="menu-secondary"
          unmountOnExit onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<AiOutlineArrowRight />}>
              Categories
            </DropdownItem>
            <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
            <DropdownItem leftIcon="🐸">Frog</DropdownItem>
            <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
           
          </div>
        </CSSTransition>
      </div>
    );
}

export default NavbarFunc;