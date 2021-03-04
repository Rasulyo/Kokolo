import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { IconButton, makeStyles, TextField, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import BallonCard from '../../containers/Admin/BallonsList/BallonCard'
import { ballonContext } from "../../contexts/ContextBallon";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Header from '../../containers/Header/Header';

const Ballon = () => {

    // let [adminView, setAdminView] = useState(false)
    const history = useHistory()

    const useStyles = makeStyles((theme) => ({
        container: {
            width: '100%',
            maxWidth: 1080,
            margin: '0 auto'
        }
    }))

    const { balloon, getBallons, delBallons, editBallons } = useContext(ballonContext);
    console.log(balloon)

    const classes = useStyles()

    useEffect(() => {
        getBallons()
    }, [])

    // const [detail, setDetail] = useState(false)
    // const handleShow = setDetail(true)
    // const handleClose = setDetail(false)

    return (
        <div>
            <Header />
            <TextField
                fullWidth={true}
                variant={'outlined'}
                style={{ maxWidth: '50%', opacity: "0.2", margin: '0 auto', display: 'block' }}
                placeholder="Search" />

            <Grid container maxWidth="lg" spacing={2} className={classes.container} >

                {

                   balloon.map(item => (
                        <Grid  item xs={12} sm={12} lg={12} key={item.id}>

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
                                {/* <Likes/> */}
                                <Link to={`/view`}>
                                    <IconButton>
                                           
                                    </IconButton>
                                </Link>
                                <IconButton>
                                    {/* <Typography onClick={handleShow}>Detail</Typography> */}
                                </IconButton>
                            </BallonCard>
                        </Grid>


                    )
                    )}

            </Grid>
            {/* <ProductsPagination count={Math.ceil(count / 6)} page={page} onChange={onPaginationChange} /> */}
        </div>
    )
}

export default Ballon;