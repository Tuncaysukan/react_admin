import React from 'react';
import { Link, Route ,useHistory} from "react-router-dom";
import { Navbar, Nav ,NavDropdown} from "react-bootstrap";

function Header() {
  const user=JSON.parse(localStorage.getItem('UserInfo'));
  const history=useHistory();
  const logout=()=>{
 localStorage.clear();
 history.push('/login');
 window.location.reload();
  }
  return (
    <>

      <Navbar bg="light" expand="lg">
        <Navbar.Brand><Link className='logo' to='/add' >React - Laravel</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto p-4">
            {
              localStorage.getItem('UserInfo') ?
                <div>
                  <Link to='/add' >Add Product</Link>
                  <Link to='/update/:id' >Update Product</Link>
                  <Link to='/list' >Product List </Link>
                </div> :
                <div>
                  <Link to='/login' >Login </Link>
                  <Link to='/register' >Register </Link>
                </div>
            }
          </Nav>
          <Nav>
          <NavDropdown title={user&&user.name}>
<NavDropdown.Item onClick={logout}>
  Logout
</NavDropdown.Item>
          </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </>
  )
}

export default Header
