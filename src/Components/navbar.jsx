import React from "react";
import * as Bootstrap from 'react-bootstrap';

function NavBar(){
    return(
      <div className="App">
  <header>
      <Bootstrap.Navbar bg="dark" variant="dark">
      <Bootstrap.Container>
        <Bootstrap.Navbar.Brand href="/#" style={{color: "mintcream"}}>Bad Bank of the PNW</Bootstrap.Navbar.Brand>
        <Bootstrap.Nav className="me-auto">
          <Bootstrap.Nav.Link href='/'class="btn btn-secondary" data-toggle="popover" title="Go to homepage" >Home</Bootstrap.Nav.Link>
          <Bootstrap.Nav.Link href='/createaccount' class="btn btn-secondary" data-toggle="popover" title="Join the bank!">Create Account</Bootstrap.Nav.Link>
          <Bootstrap.Nav.Link href='/deposit' class="btn btn-secondary" data-toggle="popover" title="Deposit Funds">Deposit</Bootstrap.Nav.Link>
          <Bootstrap.Nav.Link href='/withdraw'class="btn btn-secondary" data-toggle="popover" title="Get Some Cash!">Withdraw</Bootstrap.Nav.Link>
          <Bootstrap.Nav.Link href='/alldata'class="btn btn-secondary" data-toggle="popover" title="Not a security issue">All Data</Bootstrap.Nav.Link>
        </Bootstrap.Nav>
      </Bootstrap.Container>
    </Bootstrap.Navbar>
    </header>
  </div>
      
      )
}
export default NavBar;