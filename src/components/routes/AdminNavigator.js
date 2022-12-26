import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../../styles/Dashboard.css'
import "../../js/sb-admin-2.min";
import "../../vendor/jquery/jquery.min";
import "../../vendor/bootstrap/js/bootstrap.bundle.min";
import "../../styles/sb-admin-2.min.css";
import "../../styles/font.css";
import LanguageChooser from "../sub_components/LanguageChooser";
import { useHistory, withRouter } from "react-router";
import { paths } from "../../untils/constant";

const AdminNavigator = (probs) => {
    const lang = useSelector(state => state.lang)
    const history = probs.history
    const onClickAccounts = () => {
        history.push(paths.ADMIN_ACCOUNTs)
    }
    const onClickModels = () => {
        history.push(paths.ADMIN_MODELs)
        console.log(history)
    }
    const onClickProducts = () => {
        history.push(paths.ADMIN_PRODUCTs)
        console.log(history)
    }

    function NavItem({pathname, onClickFunc, title}) {
        return (
            <li className={`nav-item ${history.location.pathname === pathname ? 'active' : ''}`}>
                <a
                        className="nav-link collapsed"
                        href="#"
                        data-toggle="collapse"
                        data-target="#collapseAccounts"
                        aria-expanded="true"
                        aria-controls="collapseAccounts"
                        onClick={() => onClickFunc()}
                    >
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>{title}</span>
                    </a>
            </li>
        )
    }

    return (
        <>
            <hr className="sidebar-divider" />
            <div className="sidebar-heading">{lang.account_admin}</div>

            <NavItem
                pathname = {paths.ADMIN_ACCOUNTs}
                onClickFunc = {onClickAccounts}
                title = {lang.admin_accounts}
            />
            <NavItem
                pathname = {paths.ADMIN_MODELs}
                onClickFunc = {onClickModels}
                title = {lang.admin_models}
            />
            <NavItem
                pathname = {paths.ADMIN_PRODUCTs}
                onClickFunc = {onClickProducts}
                title = {lang.admin_products}
            />
        </>
    )
}


export default withRouter(AdminNavigator)