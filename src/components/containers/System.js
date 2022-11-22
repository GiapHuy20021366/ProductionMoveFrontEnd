import React from "react"
import { Navigate, Route, Switch } from 'react-router-dom';
import ToastUtil from "../../untils/toastUtil";
import { useEffect } from "react";
import { connectServer } from "../../socket";
import { useRef } from 'react';
const System = (probs) => {
    const socket = useRef()
    useEffect(() => {
        ToastUtil.success("Wellcome back", 1500)
        socket.current = connectServer()
    }, [])
    return (
        <>
            <div>System</div>
        </>
    )
}

export default System