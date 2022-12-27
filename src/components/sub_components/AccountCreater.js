import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../../styles/AccountCreater.scss'
import ToastUtil from "../../untils/toastUtil";
import useCallApi from "../../untils/fetch";
import { apiUrls } from '../../untils/constant'

const AccountCreater = ({ handleResult }) => {
    const subLang = useSelector(state => state.lang.AccountCreater)
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

        await useCallApi(
            apiUrls.CREATE_PARTNER,
            newAcc
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

            ToastUtil.success(subLang.create_success, 1000);
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
                return subLang.admin
            case 2:
                return subLang.factory
            case 3:
                return subLang.dealer
            case 4:
                return subLang.maintain_center
            default:
                return 'Unknown'
        }
    }

    return (
        <div className="account-creater-container">
            <ul>
                <li>
                    <label htmlFor="userName">{subLang.userName}:</label>
                    <input type='text' placeholder={subLang.userName} name="userName" ref={userNameRef} required></input>
                </li>
                <li>
                    <label htmlFor="password">{subLang.password}:</label>
                    <input type='password' placeholder={subLang.password} name="password" ref={passwordRef} required></input>
                </li>
                <li>
                    <label htmlFor="email">{subLang.email}:</label>
                    <input type='email' placeholder={subLang.email} name="email" ref={emailRef} required></input>
                </li>
                <li>
                    <label htmlFor="displayName">{subLang.name}:</label>
                    <input type='text' placeholder={subLang.name} name='displayName' ref={nameRef} required></input>
                </li>
                <li>
                    <label htmlFor="phone">{subLang.phone}:</label>
                    <input type='text' placeholder={subLang.phone} name='phone' ref={phoneRef} ></input>
                </li>
                <li>
                    <label htmlFor="address">{subLang.address}:</label>
                    <input type='text' placeholder={subLang.address} name='address' ref={addressRef}></input>
                </li>
                <li>
                    <label>{subLang.role}:</label>
                    <select ref={roleRef}>
                        <option value="1">{getRole(1)}</option>
                        <option value="2">{getRole(2)}</option>
                        <option value="3">{getRole(3)}</option>
                        <option value="4">{getRole(4)}</option>
                    </select>
                </li>
            </ul>
            <div className="errorMsg">{errorMessage}</div>
            <button onClick={() => onClickAddAccount()}>{subLang.add_account}</button>
        </div>
    )
}

export default AccountCreater

