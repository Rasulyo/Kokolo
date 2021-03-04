import classes from './Home.module.css';
import { Button, Container, Typography } from '@material-ui/core';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

import React, { useState, useRef, useEffect, useContext } from 'react';
import { Modal, ModalTitle, ModalBody, Form } from 'react-bootstrap';
import ModalHeader from "react-bootstrap/ModalHeader";
import { ballonContext } from '../../contexts/ContextBallon';
import CLOUDS from 'vanta/dist/vanta.clouds.min'
import air from '../../assets/images/air.png'
import balon from '../../assets/images/balon.png'



const Content = (props) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const { addCallData } = useContext(ballonContext)

    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(CLOUDS({
                el: myRef.current
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    function handleClick() {
        if (!name || !phone) {
            alert('Fill all')
            return
        }
        let newObj = {
            name: name,
            phone: phone
        }
        addCallData(newObj)
        setName('')
        setPhone('')
    }


    const [call, setCall] = useState(false);
    const handleCloseModal = () => setCall(false);
    const handleShowModal = () => setCall(true);
    return (
        <>

            <div ref={myRef}
                style={{
                    margin: 0,
                    marginTop: "-60px",
                    paddingTop: 0,
                    width: "100%",
                    height: "100vh",
                    minHeight: "800px",
                    filter: "brightness(90%)"
                }}
            >
                <Header />
                <div className={classes.back} >

                    <Container maxWidth="md" >
                        <div>
                            <div style={{
                                marginTop: "200px !important",
                                display: "flex",
                                justifyContent: "space-between",
                            }}>
                                <Link to="/ballons" style={{ textDecoration: "none" , color: "black" }}>
                                    <p>Balloon </p>
                                </Link>

                                <Link to="/reviews" style={{ textDecoration: "none" , color: "black" }}>
                                    <p>Reviews</p>
                                </Link>

                                <Link to="/ad" style={{ textDecoration: "none" , color: "black" }}>
                                    <p>Ad</p>
                                </Link>

                              
                            </div>
                        </div>
                        <div style={{ textAlign: "center", paddingTop: "100px" }}>
                            <h1 style={{ textAlign: "center", margin: "50px auto"}} >
                                EXPEDITIONS
                            </h1>
                            <h4>ON BALLOONS</h4>
                            <h4>IN  KYRGYZSTAN</h4>
                            <Button onClick={handleShowModal} color="secondary" variant="contained">
                                Book a trip
                            </Button>
                        </div>

                        <Modal style={{background: "linear-gradient(to right, #076585, #fff)"}} show={call} onHide={handleCloseModal}>
                            <ModalHeader style={{background: "linear-gradient(to left, #00416a, #799f0c, #ffe000)"}} closeButton>
                                Booking
                            </ModalHeader>
                            <ModalBody  style={{background: "linear-gradient(to left, #00416a, #799f0c, #ffe000)"}}>
                                <Form>
                                    <Form.Group style={{display: "flex", justifyContent: "space-between"}}>
                                        <Form.Label>Name</Form.Label>
                                        <input value={name} type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group style={{display: "flex", justifyContent: "space-between"}}>
                                        <Form.Label>number</Form.Label>
                                        <input value={phone} type="number" placeholder="Number" onChange={(e) => setPhone(e.target.value)} />
                                    </Form.Group>
                                    <button style={{background: "linear-gradient(to left, #00416a, #799f0c, #ffe000)"}} onClick={handleClick} >Leave</button>
                                </Form>
                            </ModalBody>
                        </Modal>
                    </Container>

                   </div>
            </div>
        </>
    );
};

export default Content;