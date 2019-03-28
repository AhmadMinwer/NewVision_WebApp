import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import Badge from 'react-bootstrap/Badge';
import { connect } from 'react-redux'
import { Nav, NavItem, NavLink } from 'reactstrap';


class NewVisionNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href='/' exact className="py-0 my-0"><h1 className="my-0"><Badge className="newvision-color">NewVision</Badge></h1></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href='/students' activeClassName='active'>Students</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/groups' activeClassName='active'>Groups</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">CMS</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps({  }) {
  return {
  };
}

export default connect(mapStateToProps)(NewVisionNav);

