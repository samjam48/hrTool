import React from 'react';

import { Navbar, FormGroup, FormControl, Button, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
 
const Nav = (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Form pullLeft>
        <FormGroup>
          <FormControl type="text" placeholder="Search" />
        </FormGroup>
        {' '}
        <Button type="submit">Submit</Button>
      </Navbar.Form>
    </Navbar.Collapse>
  </Navbar>
);



export default Nav



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