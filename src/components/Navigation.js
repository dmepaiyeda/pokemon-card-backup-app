import React from 'react'
import {Navbar, Nav,} from 'react-bootstrap'

export const NavigationBar = () => {
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Pokemon Card Backup</Navbar.Brand>
            </Navbar>

        </div>
    )
}

export default NavigationBar;
