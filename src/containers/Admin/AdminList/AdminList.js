// import React, { useContext, useEffect} from 'react';
// // import { Link } from 'react-router-dom';
// import { ballonContext } from '../../../contexts/ContextBallon';


// const AdminList = () => {
//     const { calls,
//         getCallData,
//         delCallData,
//         changeStatus
//          } = useContext(ballonContext)

//         useEffect(() => {
//             getCallData()
//         }, [])
//         console.log(calls)

//     return (
//         <>
//             <div style={{ border: "1px solid black"}}>
//                 {calls.map(item => (
//                     <ul style={{backgroundColor: "red", display: "flex",
//                     listStyle: "none",
//                     justifyContent:"space-evenly", width: "100%", height: "100%"}}
//                      key={item.id} className={item.status ? "completed" : ''} >
//                          <input onChange={() => changeStatus(item.id)}
//                         type="checkbox"
//                         checked={item.status} />
//                         <li>{item.name} </li>
//                         <li>{item.phone} </li>
//                         <li>{item.type} </li>

//                         <button onClick={() => delCallData(item.id)}>&times;</button>
//                     </ul>
//                 ))}
//             </div>
//         </>
//     )
// };

// export default AdminList;


import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import { ballonContext } from '../../../contexts/ContextBallon';
import DeleteIcon from '@material-ui/icons/Delete';
import { Typography } from '@material-ui/core';
import Header from '../../Header/Header';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        // display: "flex",
        // justifyContent: "center",
        // textAlign: "center !important"
    },
}));


export default function AdminList() {
    const { calls,
        getCallData,
        delCallData,
        changeStatus
    } = useContext(ballonContext)

    useEffect(() => {
        getCallData()
    }, [])
    const classes = useStyles();



    return (
        <List className={classes.root}>
            <Header />
            <Typography variant="h3" align="center">Form</Typography>
            {calls.map((value) => {
                
                
                return (
                    <>
                    <ListItem key={value.id} role={undefined}>
                        <ListItemIcon>
                            <Checkbox
                                onChange={() => changeStatus(value.id)}
                                type="checkbox"
                                checked={value.status}
                            />
                        </ListItemIcon>
                        <ListItemSecondaryAction >
                            <ListItemIcon>
                                {value.name}
                            </ListItemIcon>
                            <ListItemIcon>
                                {value.phone}
                            </ListItemIcon>
                            <ListItemIcon>
                                {value.type}
                            </ListItemIcon>
                            <IconButton edge="end" aria-label="comments">
                                <DeleteIcon onClick={() => delCallData(value.id)} fontSize="small" />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
            </>
                );
            })}
        </List>
    );
}


