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

        <div className="page-white">
            <div className="login">
                <span className="text">Login!</span>
                <form class="login-form">
                    <div class="input-container">
                        <input
                            type="text"
                            className="input-box"
                            placeholder="Username"
                            ref={userNameRef} required
                        />
                    </div>
                    <div class="input-container">
                        <input
                            type="password"
                            className="input-box"
                            placeholder="Password"
                            ref={passwordRef} required
                        />
                    </div>
                    <span>{errMess}</span>
                    <div class="button-container">
                        <input type="submit" content="Login" value="Login" onClick={() => onCLickLoginButton()} />
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Login