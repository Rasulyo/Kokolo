import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {  Modal, ModalTitle, ModalBody, Form } from 'react-bootstrap';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Truncate from 'react-truncate'
import { IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: "1600px",
        minHeight: 500,
        width: '100%',
        display: "flex",
        height: "100%",
        boxSizing: "border-box",
        flexWrap: "wrap"
    },
    media: {
        height: "100%",
        maxWidth: 1200,
        width: '100%',
        minHeight: 600,
        backgroundSize: 'cover',
       
    },
    
});

export default function BallonCard({ data, children }) {
    // const {id} = useParams()
    const classes = useStyles();
    const {
        title,
        name,
        price,
        description,
        image,
        type,
        program,
        id
    } = data


    const addToLocal = (data) => {
        if(!localStorage.getItem('tasks-data')){ 
            localStorage.setItem('tasks-data', '[]')
        }
        let data1 = JSON.parse(localStorage.getItem('tasks-data'));
        data1.push(data) 
        localStorage.setItem('tasks-data', JSON.stringify(data1)) 
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const {addToLocal} = useContext(localItem)

    return (
        <>
            {data ? (

                <Card className={classes.root}>
                    <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        name={name}
                        image={image}
                    />
                    </CardActionArea>
                    <CardActionArea >
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                {name}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                {price} $
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                {type}
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p">
                                <Truncate lines={3} >
                                    {description}
                                </Truncate>
                            </Typography>


                            <IconButton>
                                <Button color="secondary" onClick={handleShow} variant="outlined">Program</Button>
                            </IconButton> <br />
                            <Modal show={show} onHide={handleClose}>
                                <ModalBody>
                                    <Form>
                                        <Form.Group controlId='fromBasicEmail'>
                                            <Form.Text>{program}</Form.Text>
                                        </Form.Group>
                                    </Form>
                                </ModalBody>
                            </Modal>
                            <IconButton>
                                <Link to="/order">
                                    <Button color="primary" onClick={() => addToLocal(data)} variant="outlined">Buy</Button>
                                </Link>
                            </IconButton>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        {children}
                    </CardActions>
                </Card>
            ) : (null)}
        </>
    );
}