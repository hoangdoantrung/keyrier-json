import "./App.css";

import * as React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
} from "reactstrap";

import Editor from "./Editor/Editor";

export const App = () => (
  <div className="App">
    <Navbar color="dark" dark={true} expand="md">
      <NavbarBrand href="/">Keyrier JSON</NavbarBrand>
      <Nav className="ml-auto" navbar={true}>
        <NavItem>
          <NavLink href="https://github.com/magoo-magoo/keyrier-json">
            GitHub
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
    <Container>
      <Editor />
    </Container>
  </div>
);

export default App;