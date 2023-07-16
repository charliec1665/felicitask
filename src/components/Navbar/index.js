import React from 'react';
// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
    return (
        <>
        {/* May need to move Row to App.js so that the lists can be created within the second column in same row */}
            <Row>
                <Col xs={2} id='navbar-column'>
                    <Navbar className='d-flex flex-column'>
                        <h1>felici<span>task</span></h1>
                        <Nav id='navlinks' className='d-flex flex-column'>
                            <NavDropdown title='Channels'>
                                {/* REMEMBER to link channels correctly later */}
                                <NavDropdown.Item href='#all-channels'>all</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title='Work'>
                                <NavDropdown.Item href='#all-work'>all</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title='Personal'>
                                <NavDropdown.Item href='#all-personal'>all</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar>
                </Col>
            </Row>
        </>
    )
}

export default Navigation;