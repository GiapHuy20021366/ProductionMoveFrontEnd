import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../../styles/AccountCreater.scss'
import axios from '../../axios'
import ToastUtil from "../../untils/toastUtil";

const AccountCreater = ({ handleResult }) => {
    const lang = useSelector(state => state.lang)
    const account = useSelector(state => state.user.account)

    const userNameRef = useRef()
    const passwordRef = useRef()
    const emailRef = useRef()
    const nameRef = useRef()
    const phoneRef = useRef()
    const addressRef = useRef()
    const roleRef = useRef()

    const [errorMessage, setErrorMessage] = useState('')

    const onClickAddAccount = async () => {
        setErrorMessage('')
        const newAcc = {
            userName: userNameRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value,
            name: nameRef.current.value,
            address: addressRef.current.value,
            phone: phoneRef.current.value,
            role: roleRef.current.value
        }

        await axios.post(
            '/api/create-partner', // path of API
            newAcc,
            {
                headers: {
                    Authorization: account.token
                }
            }
        ).then((data) => {
            handleResult && handleResult({
                ...newAcc,
                id: data.data.id
            })

            userNameRef.current.value = ''
            passwordRef.current.value = ''
            emailRef.current.value = ''
            nameRef.current.value = ''
            addressRef.current.value = ''
            phoneRef.current.value = ''

            ToastUtil.success(lang.account_create_success, 1000);
            // console.log(data)
        }).catch((error) => {
            // console.log(error)
            const messageResponse = error.response.data.message
            setErrorMessage(messageResponse)
        })

        // console.log(newAcc)
        // setVisible && setVisible(false)
        // setStatus && setStatus('success')
        // handleResult && handleResult()
    }

    const getRole = (roleId) => {
        switch (roleId) {
            case 1:
                return lang.account_admin
            case 2:
                return lang.account_factory
            case 3:
                return lang.account_dealer
            case 4:
                return lang.account_maintain_center
            default:
                return 'Unknown'
        }
    }

    return (
        <div className="account-creater-container">
            <ul>
                <li>
                    <label htmlFor="userName">{lang.account_userName}:</label>
                    <input type='text' placeholder={lang.account_userName} name="userName" ref={userNameRef} required></input>
                </li>
                <li>
                    <label htmlFor="password">{lang.account_password}:</label>
                    <input type='password' placeholder={lang.account_password} name="password" ref={passwordRef} required></input>
                </li>
                <li>
                    <label htmlFor="email">{lang.account_email}:</label>
                    <input type='email' placeholder={lang.account_email} name="email" ref={emailRef} required></input>
                </li>
                <li>
                    <label htmlFor="displayName">{lang.account_name}:</label>
                    <input type='text' placeholder={lang.account_name} name='displayName' ref={nameRef} required></input>
                </li>
                <li>
                    <label htmlFor="phone">{lang.account_phone}:</label>
                    <input type='text' placeholder={lang.account_phone} name='phone' ref={phoneRef} ></input>
                </li>
                <li>
                    <label htmlFor="address">{lang.account_address}:</label>
                    <input type='text' placeholder={lang.account_address} name='address' ref={addressRef}></input>
                </li>
                <li>
                    <label>{lang.account_role}:</label>
                    <select ref={roleRef}>
                        <option value="1">{getRole(1)}</option>
                        <option value="2">{getRole(2)}</option>
                        <option value="3">{getRole(3)}</option>
                        <option value="4">{getRole(4)}</option>
                    </select>
                </li>
            </ul>
            <div>{errorMessage}</div>
            <button onClick={() => onClickAddAccount()}>Add Account</button>
        </div>
    )
}

export default AccountCreater

