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
                font-size: 1.25vw;
                font-weight: bold;
                /*padding-right: .45vw;
                padding-left: .45vw; */   
                padding-right: 0.3vw!important;
                padding-left: 0.3vw!important;  
                margin-right:1vw;
            }
            .navbar-nav{
                font-size: 1.05vw;
                background-color: transparent;
                color: #ffffff;
            }
            .navbar{
                margin-left:10%;
                height:100%;
                margin-right:5rem;
                white-space: nowrap;
                width: 80%;
                background-color: #2d3135!important;
                padding: 0px;
            }
            .navcontainer{
                width:100%;
                height:3.25vw;
                background-color: #2d3135!important;
            }
            .twitter{
                /*margin-left: 1rem*/;
                opacity: 50%;
            }
            .mr-auto{
                padding: 0px;
            }
            .nav-link{
                padding: 0vw;
                padding-right: 0.45vw!important;
                padding-left: 0.45vw!important;
            }
            .twitterimg{
                width:1.82vw;
                height:1.82vw;
            }
            .donate{
                padding-left: 52.75vw!important;
                padding-right: 0!important;
            }
            @media (max-aspect-ratio: 1/1) {
                .navcontainer {
                    height:6.5vw;
                }
                .navbar-brand {
                    font-size: 2.5vw;
                }
                .navbar-nav {
                    font-size: 2.10vw;
                    padding-top:0.25vw;
                }
                .donate{
                    padding-left: 30.75vw!important;
                    padding-right: 0!important;
                }    
                .twitterimg{
                    width:3.64vw;
                    height:3.64vw;
                }    
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
                    <Nav.Link href="https://ko-fi.com/bobbievr" className="donate">Donate</Nav.Link>
                </Nav>
                <Nav>
                <Navbar.Brand className="twitter" href="https://twitter.com/VRBobbie">
                    <img
                        src="/twitterlogo.png"
                        className="d-inline-block align-top twitterimg"
                        alt="Twitter Link"
                    />
                </Navbar.Brand>
                </Nav>

            </Navbar>
        </div>
    </>
    )
};
