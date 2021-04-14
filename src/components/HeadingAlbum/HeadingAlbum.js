import { container } from 'assets/jss/material-kit-react'
import React from 'react'
import { Link } from 'react-router-dom'
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container
} from 'reactstrap'
export const HeadingAlbum = () => {
    return (
        <Navbar color="dark" dark>
            <Container>
                <NavbarBrand href="/">My Album</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link className="btn btn-primary" to="/library/add">Add Playlist</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}
