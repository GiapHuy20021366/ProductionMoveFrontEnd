import React from "react"
import { Navigate, Route, Switch } from 'react-router-dom';
import ToastUtil from "../../untils/toastUtil";
import { useEffect } from "react";
import { connectServer } from "../../socket";
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { userLogout } from "../../store/slices/userSlices";
const System = (probs) => {
    useEffect(() => {
        ToastUtil.success("Wellcome back", 1500)
    }, [])
    const dispatch = useDispatch()
    const onClickLogout = () => {
        dispatch(userLogout())
    }
    return (
        <>
            <button onClick={() => onClickLogout()}>Logout</button>
            <div>System</div>
        </>
    )
}

export default System