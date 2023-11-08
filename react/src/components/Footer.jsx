import React from "react"
import { Nav } from "react-bootstrap"

function Footer() {
    return (
        <footer>
            <Nav className="bg-dark justify-content-center py-2" defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link className="text-white text-decoration-underline" href="/home">Instagram</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link className="text-white text-decoration-underline" eventKey="link-1">Whatsapp</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link className="text-white text-decoration-underline" eventKey="link-2">Github</Nav.Link>
                </Nav.Item>
            </Nav>
        </footer>
    )
}

export default Footer;