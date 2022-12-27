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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

<<<<<<< HEAD
            <li className={`nav-item ${history.location.pathname === paths.ADMIN_ACCOUNTs ? 'active' : ''}`}>
                <a
                    className="nav-link pointer"
                    onClick={() => onClickAccounts()}
                >
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>{lang.admin_accounts}</span>
                </a>
                {/* <div
                    id="collapseLanguage"
                    className="collapse"
                    aria-labelledby="headingLanguage"
                    data-parent="#accordionSidebar"
                >
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <a
                            className={`collapse-item language-area ${lang._NAME_ === 'VI' ? "language-active" : ""}`}
                            onClick={(e) => onClickLanguage(e)}
                            ref={vietnameseRef}
                        >
                            {lang.vietnamese}
                        </a>
                        <a
                            className={`collapse-item language-area ${lang._NAME_ === 'EN' ? "language-active" : ""}`}
                            onClick={(e) => onClickLanguage(e)}
                            ref={englishRef}
                        >
                            {lang.english}
                        </a>
                    </div>
                </div> */}
            </li>
=======
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
>>>>>>> origin/fe
        </>
    )
}


export default withRouter(AdminNavigator)