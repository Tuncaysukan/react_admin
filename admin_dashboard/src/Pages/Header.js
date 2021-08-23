import React from 'react';
import {Link} from "react-router-dom";
import { Navbar,Nav } from "react-bootstrap";
import AddProduct from "./AddProduct";

function Header() {
    return (
        <>

<Navbar   bg="light" expand="lg">
  <Navbar.Brand href="#home">React -  Laravel</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto p-4">
     <Link to='/add' >Add Product</Link>
     <Link to='/update' >Update Product</Link>
     <Link to='/login' >Login </Link>
     <Link to='/register' >Register </Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
            
        </>
    )
}

export default Header
