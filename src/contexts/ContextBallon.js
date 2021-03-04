import axios from 'axios';
import React, { useReducer } from 'react';
import { API } from '../helpers/constant'
import { API_CALL } from '../helpers/constant'


export const ballonContext = React.createContext()

const INIT_STATE = {
    balloon: [],
    edited: null,
    calls: []
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_BALLONS":
            return { ...state, balloon: action.payload }
        case "EDIT_BALLON":
            return { ...state, edited: action.payload }
        case "GET_CALLS_DATA":
            return { ...state, calls: action.payload }
        default: return state
    }
}
const ContextBallonProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getBallons = async () => {
        const { data } = await axios(`${API}`)
        dispatch({
            type: "GET_BALLONS",
            payload: data
        })
    }

    const AddBallons = async (newBallons) => {
        await axios.post(`${API}`, newBallons)
        getBallons()
    }

    const delBallons = async (id) => {
        await axios.delete(`${API}/${id}`)
        getBallons()
    }
    const editBallons = async (id) => {
        const { data } = await axios(`${API}/${id}`)
        dispatch({
            type: "EDIT_BALLON",
            payload: data
        })
    }
    const saveEdit = async (newBallons) => {
        await axios.patch(`${API}/${newBallons.id}`, newBallons)
        getBallons()
    }

    const getCallData = async () => {
        let { data } = await axios(`${API_CALL}`)
        dispatch({
            type: "GET_CALLS_DATA",
            payload: data
        })
    }
    const addCallData = async (newObj) => {
        const data = await axios.post(`${API_CALL}`, newObj)
        getCallData()
    }

    const delCallData = async (id) => {
        await axios.delete(`${API_CALL}/${id}`)
        getCallData()
    }


    const changeStatus = async (id) => {
        const { data } =  await axios(`${API_CALL}/${id}`)
        await axios.patch(`${API_CALL}/${id}`, { status: !data.status })
        getCallData()
    }

    return (
        <ballonContext.Provider value={{
            balloon: state.balloon,
            edited: state.edited,
            calls: state.calls,
            getBallons,
            AddBallons,
            delBallons,
            editBallons,
            saveEdit,
            getCallData,
            addCallData,
            delCallData,
            changeStatus

        }}>
            {children}
        </ballonContext.Provider>
    );
};

export default ContextBallonProvider;