import React, { Component} from 'react';
// import { Link } from 'react-router';

// import { Nav, Navbar, Header, FormGroup, FormControl, Button, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {  Navbar, Nav, MenuItem, NavItem, NavDropdown, FormGroup, FormControl, Button } from 'react-bootstrap';

// import style from 'bootstrap/dist/css/bootstrap.css';


class Header extends Component {
    render() {
        return (
  <Navbar staticTop className="nav">
    <Navbar.Header className="navItem">
      <Navbar.Brand className="navItem">
        <a href="#">Brand</a>
      </Navbar.Brand>
      <Navbar.Toggle className="navItem">Search</Navbar.Toggle>
      <Nav>
        <NavItem  className="navItem"eventKey={1} href="#">Link</NavItem>
        <NavItem  className="navItem"eventKey={2} href="#">Link</NavItem>
        <Navbar.Text className="navItem">
            Signed in as: <Navbar.Link href="#">Admin</Navbar.Link>
        </Navbar.Text>
        <Navbar.Text pullRight className="navItem">
            Sign Out
        </Navbar.Text>
      </Nav>
    </Navbar.Header>
    <Navbar.Collapse className="navItem">
        <Navbar.Form pullLeft className="navItem">
        <FormGroup  className="navItem">
          <FormControl type="text" placeholder="Search" />
        </FormGroup>
        {' '}
        <Button type="submit">Submit</Button>
      </Navbar.Form>

    </Navbar.Collapse>
  </Navbar>

        );
    }
}

export default Header

// // BASIC NAVBAR
// <nav className="navbar navbar-light">
//     <ul className="nav navbar-nav">
//         <li className="nav-item">
//         Sign in
//         </li>
//     </ul>
// </nav>

    // <Navbar.Collapse>
    //   <Nav>
    //     <NavItem eventKey={1} href="#">Link</NavItem>
    //     <NavItem eventKey={2} href="#">Link</NavItem>
    //     <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
    //       <MenuItem eventKey={3.1}>Action</MenuItem>
    //       <MenuItem eventKey={3.2}>Another action</MenuItem>
    //       <MenuItem eventKey={3.3}>Something else here</MenuItem>
    //       <MenuItem divider />
    //       <MenuItem eventKey={3.3}>Separated link</MenuItem>
    //     </NavDropdown>
    //   </Nav>
    //   <Nav pullRight>
    //     <NavItem eventKey={1} href="#">Link Right</NavItem>
    //     <NavItem eventKey={2} href="#">Link Right</NavItem>
    //   </Nav>
    // </Navbar.Collapse>



    // <NavBar.Dropdown toggleClassName="pointer-cursor" style={{ color: 'red' }} text="Sub menu">
    //     <NavBar.Item>Sub option a</NavBar.Item>
    //     <NavBar.Item href="#foo">Sub option b</NavBar.Item>
    //     <NavBar.Item>Sub option c</NavBar.Item>
    // </NavBar.Dropdown>
    // <NavBar.Dropdown disabled={true} text="Sub menu">
    //     <NavBar.Item>Sub option a</NavBar.Item>
    //     <NavBar.Item>Sub option b</NavBar.Item>
    //     <NavBar.Item>Sub option c</NavBar.Item>
    // </NavBar.Dropdown>