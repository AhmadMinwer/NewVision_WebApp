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
        <Navbar className='shadow-sm' color="white" light expand="md">
          <NavbarBrand href='/' exact='true' className="py-0 my-0"><h1 className="my-0"><Badge className="newvision-color">NewVision</Badge></h1></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href='/students' >Students</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/groups' >Groups</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/settings'>Settings</NavLink>
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

