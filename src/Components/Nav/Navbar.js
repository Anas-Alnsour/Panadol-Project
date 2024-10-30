import React from "react";
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import './Nav.css';
import logo from '../../img/Screenshot_2024-10-25_165734-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Navbars = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/home">
                    <img src={logo} title="Logo" alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto justify-content-center text-center">
                        <Nav.Link as={Link} to="home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/WhereToBuy">Where to Buy Panadol Products</Nav.Link>
                        <NavDropdown title="Panadol & pain relief" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://www.panadol.com/en-me/childrens-products-five-to-twelve-years/">Children’s Panadol (5-12 Years) Elixir</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.panadol.com/en-me/managing-pain/">A Complete Guide To Pain Management</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.panadol.com/en-me/pain-relief/">Different Types of Pain Relief</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.panadol.com/en-me/adult-products-everyday-pain-relief/">Everyday Pain Relief Product Range</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.panadol.com/en-me/adult-products-fast-pain-relief/">Fast Pain Relief Product Range</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.panadol.com/en-me/adult-products-pain-relief-osteoarthritis/">Panadol Osteo for Osteoarthritis Pain Relief</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.panadol.com/en-me/adult-products-tough-pain-relief/">Panadol Extra for Tough Pain Relief</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.panadol.com/en-me/panadol-safe-during-pregnancy/">Using Panadol in Pregnancy</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.panadol.com/en-me/using-panadol-with-other-medication/">Mixing Medication: Panadol and Other Medicines</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="https://www.panadol.com/en-me/search-results/">
                            <FontAwesomeIcon icon={faSearch} className="search-icon" />
                        </Nav.Link>
                        <div className="d-flex justify-content-center w-100">
                            <Link to="/contact"><button className="btn text-center">Contact Us</button></Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navbars;
