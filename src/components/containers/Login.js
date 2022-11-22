import React, { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { loginUser } from "../../store/slices/userSlices"
import '../../styles/Login.scss'


const Login = (probs) => {
    const userNameRef = useRef()
    const passwordRef = useRef()
    const [errMess, setErrMess] = useState('')
    const [isLogging, setIsLogging] = useState(false)
    const dispatch = useDispatch()

    const onCLickLoginButton = () => {
        setErrMess('')
        dispatch(loginUser({
            userName: userNameRef.current.value,
            password: passwordRef.current.value
        })).catch((mess) => {
            setErrMess(mess.message)
        })
    }

    return (
        <div className="login-container">
            <div className="input-container">
                <label htmlFor='userName'><b>Username:</b></label>
                <input
                    type='text'
                    placeholder="Enter Username"
                    name='userName'
                    ref={userNameRef} required>
                </input>
            </div>

            <div className="input-container">
                <label htmlFor='password'><b>Password:</b></label>
                <input
                    type='password'
                    placeholder="Enter Password"
                    name='password'
                    ref={passwordRef} required>
                </input>
            </div>
            <div>{errMess}</div>
            <button onClick={() => onCLickLoginButton()}>Login</button>
        </div>
    )
}

export default Login