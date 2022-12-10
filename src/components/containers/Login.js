import React, { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { loginUser } from "../../store/slices/userSlices"
import '../../styles/Login.scss'
import {paths} from '../../untils/constant'

const Login = (probs) => {
    const userNameRef = useRef()
    const passwordRef = useRef()
    const [errMess, setErrMess] = useState('')
    const [isLogging, setIsLogging] = useState(false)
    const dispatch = useDispatch()

    const onCLickLoginButton = (e) => {
        e.preventDefault()
        setErrMess('')
        dispatch(loginUser({
            userName: userNameRef.current.value,
            password: passwordRef.current.value
        })).catch((mess) => {
            setErrMess(mess.message)
        })
    }

    function turnBack() {
        probs.history.push(paths.HOME)
    }

    return (
        <div className="page-white">
            <div className="login">
                <form className="login-form" action="" method="post">
                    <h1 className="text">Welcome</h1>
                    <div className="input-container">
                        <input
                            type="text"
                            className="input-box"
                            placeholder="Username"
                            ref={userNameRef} required
                        />
                    </div>
                    <div className="input-container">
                        <input
                            type="password"
                            className="input-box"
                            placeholder="Password"
                            ref={passwordRef} required
                        />
                    </div>
                    <span>{errMess}</span>
                    <div className="button-container">
                        <input type="submit" content="Login" value="Login" onClick={(e) => onCLickLoginButton(e)} />
                    </div>
                    <button class="backBtn" onClick={() => turnBack()}>
                        <img src="/backBtn.png" alt="return" />
                    </button>
                </form>
            </div>
        </div>

    )
}

export default Login