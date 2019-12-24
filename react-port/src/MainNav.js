import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import resume from './rudisill_resume_2019_public.pdf';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" className='navbar-dark' light expand="md">
        <NavbarBrand href="/portfolio">Garrett Rudisill</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/portfolio">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/alm0st907">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Projects
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  SMS Notifier
                </DropdownItem>
                <DropdownItem>
                  Minor Projects
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  A dangling divider!
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href={resume} target="_blank">Résumé</NavLink>
            </NavItem>
          </Nav>
          <NavbarText className="text-white">Portfolio</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
