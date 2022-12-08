import React from "react"
import { Navigate, Route, Switch, useHistory } from 'react-router-dom';
import ToastUtil from "../../untils/toastUtil";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { userLogout } from "../../store/slices/userSlices";
import { paths } from "../../untils/constant";
const System = (probs) => {
    const history = useHistory()
    useEffect(() => {
        ToastUtil.success("Wellcome back", 1500)
    }, [])
    const dispatch = useDispatch()
    const onClickLogout = () => {
        history.push(paths.HOME)
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