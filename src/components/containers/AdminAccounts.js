import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import '../../styles/Dashboard.css'
import "../../js/sb-admin-2.min";
import "../../vendor/jquery/jquery.min";
import "../../vendor/bootstrap/js/bootstrap.bundle.min";
import "../../styles/sb-admin-2.min.css";
import "../../styles/font.css";
import "../../vendor/datatables/dataTables.bootstrap4.min.css";
import { Redirect } from "react-router";
import { paths } from "../../untils/constant";
import axios from '../../axios'
import AccountCreater from "../sub_components/AdminAddAccount";
import TableBase from "../sub_components/Table"
import ToastUtil from "../../untils/toastUtil";
import paginationFactory from 'react-bootstrap-table2-paginator';


const AdminAccounts = () => {
    const account = useSelector(state => state.user.account)
    const lang = useSelector(state => state.lang)
    const [listPartners, setListPartners] = useState({})
    const [partnersloading, setPartnersLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [createAccountVisible, setCreateAccountVisible] = useState(false)
    const [statusCreateAccount, setStatusCreateAccount] = useState('')
    const userNameRef = useRef()
    const passwordRef = useRef()
    const emailRef = useRef()
    const nameRef = useRef()
    const phoneRef = useRef()
    const addressRef = useRef()
    const roleRef = useRef()
 
    const handleResultCreateAccount = (newAccount) => {
        console.log(newAccount)
        const listCopy = { ...listPartners }
        listCopy[newAccount.id] = newAccount
        setListPartners(listCopy)
    }

    if (account?.role !== 1) {
        return (
            <Redirect to={paths.SYSTEM} />
        )
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

    useEffect(async () => {
        setErrorMessage('')
        setPartnersLoading(true)
        const data = await axios.post(
            '/api/get-partners-by-query', // path of API
            {},
            {
                headers: {
                    Authorization: account.token
                }
            }
        ).then((data) => {
            setPartnersLoading(false)
            const partnersRequest = data.data.rows
            const partners = {}
            for (const partner of partnersRequest) {
                partners[partner.id] = partner
            }
            setListPartners({
                ...listPartners,
                ...partners
            })
        }).catch((error) => {
            setErrorMessage('Some error occur, please try again!')
        })
    }, [])

    const onClickCreateNewAccount = () => {
        setCreateAccountVisible(!createAccountVisible)
    }


    const columns = [
        { dataField: 'id', text: 'Id' },
        { dataField: 'name', text: lang.account_name },
        { dataField: 'email', text: lang.account_email },
        { dataField: 'phone', text: lang.account_phone },
        { dataField: 'address', text:  lang.account_address},
        { dataField: 'role', text: lang.account_role }
    ]

    const arrayPartners = Object.values(listPartners)
    for (var i = 0; i < arrayPartners.length; i++) {
        arrayPartners[i].role = getRole(arrayPartners[i].role)
    }

    function Popup(e) {
        e.preventDefault();
        e.target.parentNode.querySelector('#myModal').modal('show');
    }

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

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">{lang.admin_accounts}</h1>
            </div>
            {/* Account Create */}
            <button onClick={() => onClickCreateNewAccount()}>{lang.accounts_new_account}</button>
            
            {/* **************************************************************** */}
            {/* <form className="form-inline" onSubmit={e => Popup(e)} id="myForm">
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <div className="modal fade" tabIndex="-1" role="dialog" id="myModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title">Modal title</h4>
                    </div>
                    <div className="modal-body">
                        <p>One fine body&hellip;</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div> */}
            {/* **************************************************************** */}
            
            <button type="submit" className="btn btn-primary" data-toggle="modal" data-target="#logoutModal">Submit</button>

            <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
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
                        <div className="errorMsg">{errorMessage}</div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <div className="btn btn-primary" data-dismiss="modal" onClick={() => onClickAddAccount()}>Add new account</div>
                        </div>
                    </div>
                </div>
            </div>

            {
                createAccountVisible &&
                <AccountCreater handleResult={handleResultCreateAccount} />
            }

            <TableBase
                arrayPartners = {arrayPartners}
                columns = {columns}
                partnersloading = {partnersloading}
            />
        </div>
    )
}

export default AdminAccounts