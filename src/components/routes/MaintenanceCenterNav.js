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

const MaintenanceNavigator = (probs) => {
    const subLang = useSelector(state => state.lang)
    const history = probs.history
    const onClickProducts = () => {
        history.push(paths.MAINTENANCE_PRODUCTs)
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
            <div className="sidebar-heading">{lang.account_maintenanceCenter}</div>

            <NavItem
                pathname = {paths.MAINTENANCE_PRODUCTs}
                onClickFunc = {onClickProducts}
                title = {lang.maintenanceCenter_products}
            />
        </>
    )
}

export default withRouter(MaintenanceNavigator)