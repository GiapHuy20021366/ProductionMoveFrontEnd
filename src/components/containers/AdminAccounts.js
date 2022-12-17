import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../../styles/Dashboard.css'
import "../../js/sb-admin-2.min";
import "../../vendor/jquery/jquery.min";
import "../../vendor/bootstrap/js/bootstrap.bundle.min";
import "../../styles/sb-admin-2.min.css";
import "../../styles/font.css";
import { Redirect } from "react-router";
import { paths } from "../../untils/constant";
import axios from '../../axios'
import AccountCreater from "../sub_components/AccountCreater";
import ToastUtil from "../../untils/toastUtil";


const AdminAccounts = () => {
    const account = useSelector(state => state.user.account)
    const lang = useSelector(state => state.lang)
    const [listPartners, setListPartners] = useState({})
    const [partnersloading, setPartnersLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [createAccountVisible, setCreateAccountVisible] = useState(false)
    const [statusCreateAccount, setStatusCreateAccount] = useState('')

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

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">{lang.admin_accounts}</h1>
            </div>
            {/* Account Create */}
            <button onClick={() => onClickCreateNewAccount()}>{lang.accounts_new_account}</button>
            {
                createAccountVisible &&
                <AccountCreater handleResult={handleResultCreateAccount} />
            }

            <div className="row">
                <div className="account_inf-container col-12 ml-5">
                    {
                        partnersloading &&
                        <div>Loading...</div>
                    }
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>{lang.account_name}</th>
                                <th>{lang.account_email}</th>
                                <th>{lang.account_phone}</th>
                                <th>{lang.account_address}</th>
                                <th>{lang.account_role}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(listPartners).map((partnerId) => {
                                    const partner = listPartners[partnerId]
                                    const role = getRole(partner.role)
                                    return (
                                        <tr key={partner.id}>
                                            <td>{partner.id}</td>
                                            <td>{partner.name}</td>
                                            <td>{partner.email}</td>
                                            <td>{partner.phone}</td>
                                            <td>{partner.address}</td>
                                            <td>{role}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminAccounts