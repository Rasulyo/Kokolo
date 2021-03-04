import React, { useState, useContext } from 'react';
import classes from './Add.module.css'
import bal from '../../assets/images/bal.jpg'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { Modal, ModalBody, Form } from 'react-bootstrap';
import ModalHeader from "react-bootstrap/ModalHeader";
import { ballonContext } from '../../contexts/ContextBallon';



function PaperComponent(props) {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}

const Ad = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [type, setType] = useState('')

    const [call, setCall] = useState(false);
    const handleCloseModal = () => setCall(false);
    const handleShowModal = () => setCall(true);

    const { addCallData } = useContext(ballonContext)


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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

    return (
        <div>
            <img src={bal} />

            <div style={{ background: "url(https://www.champagne-flights.co.uk/ge/images/home/img-01.jpg)", backgroundSize: "contain", backgroundRepeat: "no-repeat", minHeight: "800px", height: "100%" }}>

                <div style={{ background: "linear-gradient(to right, #ffeeee, #ddefbb)", marginTop: "-50px" }} >
                    <Button style={{ display: "flex", margin: "0 auto" }} variant="outlined" color="primary" onClick={handleClickOpen}>
                        Learn more
                    </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        PaperComponent={PaperComponent}
                        aria-labelledby="draggable-dialog-title"
                    >
                        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                            ATTRACT ATTENTION TO YOUR FIRM ORDERING A BALLOON ADVERTISING
                    </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In voluptas tempora eaque fugiat distinctio sit earum numquam saepe sequi quam ipsum consequatur vero voluptatibus illum exercitationem illo expedita, magni sed aliquam inventore dolor dolore.
                    </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={handleClose} color="primary">
                                Cancel
                        </Button>
                            <Button style={{ maxHeight: '30px', marginRight: "20px", marginTop: "-10px", maxWidth: "30px" }} onClick={handleShowModal} variant="contained">call</Button>
                        </DialogActions>
                    </Dialog>
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
            </div>
        </div>
    );
};

export default Ad;