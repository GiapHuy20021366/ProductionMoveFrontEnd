import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../../styles/Dashboard.css'
import "../../js/sb-admin-2.min";
import "../../vendor/jquery/jquery.min";
import "../../vendor/bootstrap/js/bootstrap.bundle.min";
import "../../styles/sb-admin-2.min.css";
import "../../styles/font.css";

const Account = () => {
    const lang = useSelector(state => state.lang)
    const account = useSelector(state => state.user.account)
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
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">{lang.system_topbar_account}</h1>
            </div>
            <div className="row">
                <div className="account_inf-container col-12 ml-5">
                    <ul>
                        <li>
                            <label>{lang.account_name}: </label>
                            <span>{account.name}</span>
                        </li>
                        <li>
                            <label>{lang.account_role}: </label>
                            <span>{getRole(account.role)}</span>
                        </li>
                        <li>
                            <label>{lang.account_email}: </label>
                            <span>{account.email}</span>
                        </li>
                        <li>
                            <label>{lang.account_phone}: </label>
                            <span>{account.phone}</span>
                        </li>
                        <li>
                            <label>{lang.account_address}: </label>
                            <span>{account.address}</span>
                        </li>
                        <li>
                            <label>{lang.account_birth}: </label>
                            <span>{account.birth ? account.birth : 'None'}</span>
                        </li>
                        <li>
                            <label>{lang.account_status}: </label>
                            <span>{account.status == 2 ? lang.account_status_enable : lang.account_status_disable}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Account
