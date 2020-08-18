import Head from 'next/head';
import {Button, Collapse, ButtonGroup, Navbar, Nav, FormControl, Form} from 'react-bootstrap';
//import Collapse from 'react-bootstrap/Collapse';
import React from 'react';
import Router from 'next/router';
import styles from './header.module.css'

export default function Header() {
    const [open, setOpen] = React.useState(false);
    return (
    <>
        <style type="text/css">
            {`
            .navbar-brand {
                font-size: 1.5rem;
                font-weight: bold;
            }
            .navbar-nav{
                font-size: 1.25rem;
                color: #ffffff;
            }
            .navbar{
                margin-left:10%;
                margin-right:5rem;
                white-space: nowrap;
                width: 80%;
                background-color: #2d3135!important;
            }
            .navcontainer{
                width:100%;
                background-color: #2d3135!important;
            }
            .twitter{
                margin-left: 1rem;
                opacity: 50%;
            }
            `}
        </style>
        <div class="navcontainer">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Bobbie</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/packs">Model Packs</Nav.Link>
                    <Nav.Link href="/notes">Notes</Nav.Link>
                    <Nav.Link href="/walls">Walls</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="https://ko-fi.com/bobbievr">Donate</Nav.Link>
                <Navbar.Brand className="twitter" href="https://twitter.com/VRBobbie">
                    <img
                        src="/twitterlogo.png"
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                        alt="Twitter Link"
                    />
                </Navbar.Brand>
                </Nav>

            </Navbar>
        </div>
    </>
    )
};
