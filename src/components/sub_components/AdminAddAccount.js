import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
// import '../../styles/AccountCreater.scss'
import ToastUtil from "../../untils/toastUtil";
import useCallApi from "../../untils/fetch";
import { apiUrls } from '../../untils/constant'
import Modal from "../until_components/Modal";

const AdminAddAccount = ({ handleResult, handleClose, shower }) => {
    const subLang = useSelector(state => state.lang.AdminAddAccount)

    const userNameRef = useRef()
    const passwordRef = useRef()
    const emailRef = useRef()
    const nameRef = useRef()
    const phoneRef = useRef()
    const addressRef = useRef()
    const roleRef = useRef()

    const [errorMessage, setErrorMessage] = useState('')

    const onClickAddAccount = async (e) => {
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

        const testAPI = () => {
            Promise.resolve(newAcc).then((data) => {
                userNameRef.current.value = ''
                passwordRef.current.value = ''
                emailRef.current.value = ''
                nameRef.current.value = ''
                addressRef.current.value = ''
                phoneRef.current.value = ''

                ToastUtil.success(subLang.create_success, 1000);
                handleClose && handleClose()
            }).catch((error) => {
                const messageResponse = error.response.data.message
                setErrorMessage(messageResponse)
            })
        }

        testAPI()
        // await useCallApi(
        //     apiUrls.CREATE_PARTNER,
        //     newAcc
        // ).then((data) => {
        //     handleResult && handleResult({
        //         ...newAcc,
        //         id: data.data.id
        //     })

        //     userNameRef.current.value = ''
        //     passwordRef.current.value = ''
        //     emailRef.current.value = ''
        //     nameRef.current.value = ''
        //     addressRef.current.value = ''
        //     phoneRef.current.value = ''

        //     ToastUtil.success(subLang.create_success, 1000);
        //     handleClose && handleClose(e)
        //     window.document.body.querySelector('.modal-backdrop').remove()
        //     window.document.body.classList.remove('modal-open')
        //     window.document.body.style = null
        //     // console.log(data)
        // }).catch((error) => {
        //     // console.log(error)
        //     const messageResponse = error.response.data.message
        //     setErrorMessage(messageResponse)
        // })

    }

    const getRole = (roleId) => {
        switch (roleId) {
            case 1:
                return subLang.admin
            case 2:
                return subLang.factory
            case 3:
                return subLang.agency
            case 4:
                return subLang.maintenance
            default:
                return 'Unknown'
        }
    }

    return (
        <Modal handleClose={handleClose} shower={shower}>
            <Modal.Header title={subLang.add_new_account} />
            <Modal.Body>
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
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-secondary" type="button" data-dismiss="modal"
                    onClick={handleClose}
                >Cancel</button>
                <button className="btn btn-primary" onClick={(e) => onClickAddAccount(e)}>Add new account</button>
            </Modal.Footer>
        </Modal>
        // <div className="modal fade" id="ModalContainer" tabIndex="-1" role="dialog"
        //     aria-labelledby="exampleModalLabel" aria-hidden="true">
        //     <div className="modal-dialog" role="document">
        //         <div className="modal-content">
        //             <div className="modal-header">
        //                 <h5 className="modal-title" id="exampleModalLabel">{subLang.add_new_account}</h5>
        //                 <button className="close" type="button" data-dismiss="modal" aria-label="Close">
        //                     <span aria-hidden="true">×</span>
        //                 </button>
        //             </div>

        //             <div className="modal-body">
        //                 <ul>
        //                     <li>
        //                         <label htmlFor="userName">{subLang.userName}:</label>
        //                         <input type='text' placeholder={subLang.userName} name="userName" ref={userNameRef} required></input>
        //                     </li>
        //                     <li>
        //                         <label htmlFor="password">{subLang.password}:</label>
        //                         <input type='password' placeholder={subLang.password} name="password" ref={passwordRef} required></input>
        //                     </li>
        //                     <li>
        //                         <label htmlFor="email">{subLang.email}:</label>
        //                         <input type='email' placeholder={subLang.email} name="email" ref={emailRef} required></input>
        //                     </li>
        //                     <li>
        //                         <label htmlFor="displayName">{subLang.name}:</label>
        //                         <input type='text' placeholder={subLang.name} name='displayName' ref={nameRef} required></input>
        //                     </li>
        //                     <li>
        //                         <label htmlFor="phone">{subLang.phone}:</label>
        //                         <input type='text' placeholder={subLang.phone} name='phone' ref={phoneRef} ></input>
        //                     </li>
        //                     <li>
        //                         <label htmlFor="address">{subLang.address}:</label>
        //                         <input type='text' placeholder={subLang.address} name='address' ref={addressRef}></input>
        //                     </li>
        //                     <li>
        //                         <label>{subLang.role}:</label>
        //                         <select ref={roleRef}>
        //                             <option value="1">{getRole(1)}</option>
        //                             <option value="2">{getRole(2)}</option>
        //                             <option value="3">{getRole(3)}</option>
        //                             <option value="4">{getRole(4)}</option>
        //                         </select>
        //                     </li>
        //                 </ul>
        //                 <div className="errorMsg">{errorMessage}</div>
        //             </div>

        //             <div className="modal-footer">
        //                 <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
        //                 <button className="btn btn-primary" onClick={(e) => onClickAddAccount(e)}>Add new account</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default AdminAddAccount

