import React, { useContext, useState } from 'react';
import { ballonContext } from "../../../contexts/ContextBallon";
import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import BasicLayout from './Layout'
import Header from '../../Header/Header';


const useStyles = makeStyles({
    form: {
        width: '100%',
        maxWidth: 700,
        padding: 30,
        border: '2px solid #fff!important',
        borderRadius: 15,
        margin: '0 auto',
        height: "90%",
        // background: "url(https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/cover_image_mobile_8/715x773/17f82f742ffe127f42dca9de82fb58b1/5/Z/1610531102_00X0009HOSNO_C589_E08_GHC.jpg?imwidth=800)",
        // opacity: "0.8",
        // backgroundPosition: "center",
        // color: "white !important",
        backgroundColor: "white",
        filter: "brightness(100%)",


    },
    input: {
        marginBottom: 30,
        color: "white !important",


    }
})


export default function AddBallons() {

    const [inpName, setInpName] = useState('');
    const [inpDesc, setInpDesc] = useState('');
    const [inpPrice, setInpPrice] = useState('');
    const [inpType, setInpType] = useState('');
    const [program, setProgram] = useState('');

    const [inpImg, setInpImg] = useState('');

    const { AddBallons } = useContext(ballonContext)


    function handleClick() {
        let newBallons = {
            name: inpName,
            description: inpDesc,
            price: inpPrice,
            type: inpType,
            program: program,
            image: inpImg
        }
        AddBallons(newBallons)
        setInpName('')
        setInpDesc('')
        setInpPrice('')
        setInpImg('')
        setInpType('')
        setProgram('')

    }

    const classes = useStyles();

    const intialValues = {
        name: "",
        image: "",
        type: "",
        price: 0,
        description: ""
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Required field!').max(255, 'Too Long name!'),
        image: Yup.string().required('Required field!'),
        type: Yup.string().required('Required field!'),
        price: Yup.string().required('Required field!'),
        description: Yup.string().required('Required field!'),
    })

    const onSubmit = (values, { resetForm }) => {
        AddBallons({
            ...values,
            images: [values.image]
        })
    }



    return (
        <>
            <Header />
            <div style={{
                background: "url(https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
                backgroundSize: "cover !important",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                filter: "brightness(90%)",
                minHeight: "800px",
                height: "100%"
            }}>
                <BasicLayout>
                    <Formik
                        initialValues={intialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >

                        {({

                        }) => (
                            <Form className={classes.form}>

                                <Typography variant="h6" style={{ textAlign: 'center', marginBottom: 15 }}>
                                    Add Trip
                        </Typography>

                                <Field
                                    name="name"
                                    fullWidth
                                    label="Name"
                                    variant="outlined"
                                    className={classes.input}
                                    value={inpName}
                                    onChange={(e) => setInpName(e.target.value)}
                                    as={TextField}
                                />
                                <Field
                                    name="type"
                                    fullWidth
                                    label="Type"
                                    variant="outlined"
                                    className={classes.input}
                                    value={inpType} onChange={(e) => setInpType(e.target.value)}
                                    as={TextField}
                                />
                                <Field
                                    name="price"
                                    fullWidth
                                    label="Price"
                                    variant="outlined"
                                    className={classes.input}
                                    value={inpPrice} onChange={(e) => setInpPrice(e.target.value)}
                                    as={TextField}
                                />

                                <Field
                                    name="description"
                                    fullWidth
                                    label="Description"
                                    variant="outlined"
                                    as={TextField}
                                    className={classes.input}
                                    value={inpDesc}
                                    onChange={(e) => setInpDesc(e.target.value)}
                                    multiline
                                    rows={4}
                                    color="inherit"
                                />

                                <Field
                                    name="program"
                                    fullWidth
                                    label="program"
                                    variant="outlined"
                                    as={TextField}
                                    className={classes.input}
                                    value={program}
                                    onChange={(e) => setProgram(e.target.value)}
                                    multiline
                                    rows={10}
                                    color="inherit"
                                />

                                <Field
                                    name="image"
                                    fullWidth
                                    label="Image"
                                    className={classes.input}
                                    value={inpImg} onChange={(e) => setInpImg(e.target.value)}
                                    variant="outlined"
                                    as={TextField}
                                />

                                <Button onClick={handleClick} type="submit" color="primary" variant="contained">
                                    Save
                            </Button>

                            </Form>
                        )}
                    </Formik>
                </BasicLayout>
            </div>
        </>
    )
}
