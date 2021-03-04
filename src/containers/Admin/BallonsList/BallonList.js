import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { IconButton, makeStyles, TextField, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import BallonCard from './BallonCard'
import { ballonContext } from "../../../contexts/ContextBallon";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Header from '../../Header/Header';

const BallonList = () => {

    let [adminView, setAdminView] = useState(false)
    const history = useHistory()

    useEffect(() => {
        let test = JSON.parse(localStorage.getItem('currentUser'));
        if (test && test.Admin) {
            setAdminView(true);
        }
    }, [])

    const useStyles = makeStyles((theme) => ({
        container: {
            width: '100%',
            maxWidth: 1080,
            margin: '0 auto'
        }
    }))

    const { balloon, getBallons, delBallons, editBallons } = useContext(ballonContext);
    const classes = useStyles()

    useEffect(() => {
        getBallons()
    }, [])

    return (
        <div>
            <Header />
            <Grid container maxWidth="lg" spacing={2} className={classes.container} >
                {
                    adminView ? (
                        balloon.map(item => (
                            <Grid item xs={12} sm={12} lg={12} key={item.id}>
                                <BallonCard data={item}>
                                    <IconButton
                                        onClick={() => delBallons(item.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                    <Link to={`/edit/${item.id}`}>
                                        <IconButton
                                            onClick={() => editBallons(item.id)}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                    </Link>
                                </BallonCard>
                            </Grid>
                        ))
                    ) : ((
                        balloon.map(item => (
                            <Grid item xs={12} sm={12} lg={12} key={item.id}>
                                <BallonCard data={item}>
                                </BallonCard>
                            </Grid>
                        ))
                        ))
                }

            </Grid>
        </div>
    )
}

export default BallonList;