import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../../styles/Dashboard.css'
import "../../js/sb-admin-2.min";
import "../../vendor/jquery/jquery.min";
import "../../vendor/bootstrap/js/bootstrap.bundle.min";
import "../../styles/sb-admin-2.min.css";
import "../../styles/font.css";
import { Redirect } from "react-router";
import { paths } from "../../untils/constant";


const AdminAccounts = () => {
    const account = useSelector(state => state.user.account)
    const lang = useDispatch(state => state.lang)

    if (account?.role !== 1) {
        return (
            <Redirect to={paths.SYSTEM} />
        )
    }
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">{lang.system_topbar_account}</h1>
            </div>
            <div className="row">
                <div className="account_inf-container col-12 ml-5">
                    Content here
                </div>
            </div>
        </div>
    )
}

export default AdminAccounts