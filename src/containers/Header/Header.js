import React, { useState, useEffect, useContext } from 'react';
import { Navbar, Nav, Button, Modal, ModalTitle, ModalBody, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import styled from "styled-components";
import ModalHeader from "react-bootstrap/ModalHeader";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { API_ADMIN } from "../../helpers/constant";
import { ballonContext } from '../../contexts/ContextBallon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import { Typography } from '@material-ui/core';

const Styles = styled.div`
  a, .navbar-brand, .navbar-nav .nav-link {
    color: black;

    &:hover {
      color: black;
    }
  ;
   b, .navbar{
     background-color: #61dafb;
   }
  }
`

const Header = () => {

    let history = useHistory();

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState({});
    let [curr, setCurr] = useState(JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')) : 'asd');

    useEffect(() => {
        axios.get(API_ADMIN).then(res => {
            setUsers(res.data);
        })
    }, []);

    let [adminView, setAdminView] = useState(false)

    useEffect(() => {
        let test = JSON.parse(localStorage.getItem('currentUser'));
        if (test && test.Admin) {
            setAdminView(true);
        }
    }, [])

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [type, setType] = useState('')
    const { addCallData } = useContext(ballonContext)

    function handleClick() {
        if (!name || !phone || !type) {
            alert('Fill all')
            return
        }
        let newObj = {
            name: name,
            phone: phone,
            type: type
        }
        addCallData(newObj)
        setName('')
        setPhone('')
        setType('')
    }

    function handleInps(e) {
        let obj = {
            ...user,
            [e.target.name]: e.target.value
        };
        setUser(obj);
    }

    function login() {
        let check = false;
        let currentUser = {};
        users.forEach((p) => {
            if (p.account === user.account && p.password === user.password) {
                check = true;
                currentUser = p;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
            }
        });
        if (check) {
            history.push('/')
        } else {
            alert('No such user');
        }
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [call, setCall] = useState(false);
    const handleCloseModal = () => setCall(false);
    const handleShowModal = () => setCall(true);

    return (
        <>

            {
                adminView ? (
                    <div style={{ marginBottom: '60px', zIndex: "2" }} >

                        <Styles>
                            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light" fixed="top" style={{ border: "none", borderBottom: "2px solid #f50057" }}  >
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav>
                                        <Link to="/"><img style={{ maxHeight: '30px', maxWidth: "30px", marginLeft: "5px" }} alt="" src={'https://img.icons8.com/ios/452/hot-air-balloon.png'} /></Link>
                                        <Link to="/">
                                            <Typography>Kokolo</Typography>
                                        </Link>
                                    </Nav>
                                    <Nav className="mx-auto">
                                        <Link to="/admin-list">
                                            <Button>Admin-List</Button>
                                        </Link>
                                    </Nav>
                                    <Nav>
                                        <Button style={{ maxHeight: '30px', marginRight: "20px", marginTop: "-10px", maxWidth: "30px" }} onClick={handleShowModal} variant="contained"> <PhoneIcon /> </Button>
                                    </Nav>
                                    <Nav>
                                        {
                                            curr.account ? (
                                                <Nav.Link style={{ color: "black !important" }} onClick={() => localStorage.clear()}><Link style={{ color: "black !important" }} onClick={() => window.location.reload()}>LOGOUT: {curr.account.toUpperCase()}</Link></Nav.Link>
                                            ) :
                                                <Nav.Link style={{ color: "black !important" }} ><Link style={{ color: "black !important", marginLeft: "10px" }} onClick={handleShow}><AccountCircleIcon /> </Link></Nav.Link>
                                        }
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Styles>

                        <Modal style={{ background: "transparent" }} show={show} onHide={handleClose}>
                            <ModalHeader style={{ background: "linear-gradient(to right, #1d4350, #a43931)" }} closeButton>
                                <ModalTitle>Log in</ModalTitle>
                            </ModalHeader>
                            <ModalBody style={{ background: "linear-gradient(to right, #1d4350, #a43931)" }}>
                                <Form>
                                    <Form.Group controlId='fromBasicEmail'>
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control onChange={handleInps} type='text' name={'account'} placeholder='Enter email' />
                                        <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
                                    </Form.Group>
                                    <Form.Group controlId='fromBasicPassword'>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control onChange={handleInps} name={'password'} type='password' placeholder='Enter password' />
                                    </Form.Group>
                                    <button style={{ background: "linear-gradient(to right, #1d4350, #a43931)", alignSelf: "flex-end" }} onClick={login} >Login</button>
                                    {/* <button onClick={() => history.push('register')} >Register</button> */}
                                </Form>
                            </ModalBody>
                        </Modal>

                        <Modal style={{ background: "transparent" }} show={call} onHide={handleCloseModal}>
                            <ModalHeader style={{ backgroundColor: "#2c5364", color: "orange" }} closeButton>
                                Call back
                </ModalHeader>
                            <ModalBody style={{ backgroundColor: "#2c5364" }}>
                                <Form>
                                    <Form.Group style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Form.Label>Name</Form.Label>
                                        <input value={name} type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />

                                    </Form.Group>
                                    <Form.Group style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Form.Label>number</Form.Label>
                                        <input value={phone} type="number" placeholder="Number" onChange={(e) => setPhone(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Form.Label>type</Form.Label>
                                        <input value={type} type="text" placeholder="Type" onChange={(e) => setType(e.target.value)} />

                                    </Form.Group>
                                    <button style={{ borderRadius: "15px", backgroundColor: "orange" }} onClick={handleClick} >Send</button>
                                </Form>
                            </ModalBody>
                        </Modal>
                    </div>

                ) : (

                        <div style={{ marginBottom: '60px', zIndex: "2" }} >

                            <Styles>
                                <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light" fixed="top" style={{ border: "none", borderBottom: "2px solid #f50057" }}  >
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                    <Navbar.Collapse id="responsive-navbar-nav">
                                        <Nav>
                                            <Link to="/"><img style={{ maxHeight: '30px', maxWidth: "30px", marginLeft: "5px" }} alt="" src={'https://img.icons8.com/ios/452/hot-air-balloon.png'} /></Link>
                                            <Link to="/">
                                                <Typography>Kokolo</Typography>
                                            </Link>
                                        </Nav>
                                        <Nav className="mx-auto">

                                        </Nav>
                                        <Nav>
                                            <Button style={{ maxHeight: '30px', marginRight: "20px", marginTop: "-10px", maxWidth: "30px" }} onClick={handleShowModal} variant="contained"> <PhoneIcon /> </Button>
                                        </Nav>
                                        <Nav>
                                            {
                                                curr.account ? (
                                                    <Nav.Link style={{ color: "black !important" }} onClick={() => localStorage.clear()}><Link style={{ color: "black !important" }} onClick={() => window.location.reload()}>LOGOUT: {curr.account.toUpperCase()}</Link></Nav.Link>
                                                ) :
                                                    <Nav.Link style={{ color: "black !important" }} ><Link style={{ color: "black !important", marginLeft: "10px" }} onClick={handleShow}><AccountCircleIcon /> </Link></Nav.Link>
                                            }
                                        </Nav>
                                    </Navbar.Collapse>
                                </Navbar>
                            </Styles>

                            <Modal style={{ background: "transparent" }} show={show} onHide={handleClose}>
                                <ModalHeader style={{ background: "linear-gradient(to right, #1d4350, #a43931)" }} closeButton>
                                    <ModalTitle>Log in</ModalTitle>
                                </ModalHeader>
                                <ModalBody style={{ background: "linear-gradient(to right, #1d4350, #a43931)" }}>
                                    <Form>
                                        <Form.Group controlId='fromBasicEmail'>
                                            <Form.Label>Email Address</Form.Label>
                                            <Form.Control onChange={handleInps} type='text' name={'account'} placeholder='Enter email' />
                                            <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
                                        </Form.Group>
                                        <Form.Group controlId='fromBasicPassword'>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control onChange={handleInps} name={'password'} type='password' placeholder='Enter password' />
                                        </Form.Group>
                                        <button style={{ background: "linear-gradient(to right, #1d4350, #a43931)", alignSelf: "flex-end" }} onClick={login} >Login</button>
                                        {/* <button onClick={() => history.push('register')} >Register</button> */}
                                    </Form>
                                </ModalBody>
                            </Modal>

                            <Modal style={{ background: "transparent" }} show={call} onHide={handleCloseModal}>
                                <ModalHeader style={{ backgroundColor: "#2c5364", color: "orange" }} closeButton>
                                    Call back
                </ModalHeader>
                                <ModalBody style={{ backgroundColor: "#2c5364" }}>
                                    <Form>
                                        <Form.Group style={{ display: "flex", justifyContent: "space-between" }}>
                                            <Form.Label>Name</Form.Label>
                                            <input value={name} type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />

                                        </Form.Group>
                                        <Form.Group style={{ display: "flex", justifyContent: "space-between" }}>
                                            <Form.Label>number</Form.Label>
                                            <input value={phone} type="number" placeholder="Number" onChange={(e) => setPhone(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group style={{ display: "flex", justifyContent: "space-between" }}>
                                            <Form.Label>type</Form.Label>
                                            <input value={type} type="text" placeholder="Type" onChange={(e) => setType(e.target.value)} />

                                        </Form.Group>
                                        <button style={{ borderRadius: "15px", backgroundColor: "orange" }} onClick={handleClick} >Send</button>
                                    </Form>
                                </ModalBody>
                            </Modal>
                        </div>
                    )

            }

        </>
    );
};

export default Header;
