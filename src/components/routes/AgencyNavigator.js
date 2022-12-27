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
import NavItem from "./NavItem";

const AgencyNavigator = (probs) => {
    const subLang = useSelector(state => state.lang.AgencyNavigator)
    const history = probs.history
    const onClickProducts = () => {
        history.push(paths.AGENCY_PRODUCTs)
        console.log(history)
    }

    return (
        <>
            <hr className="sidebar-divider" />
            <div className="sidebar-heading">{subLang.agency}</div>

            <NavItem
                pathname = {paths.AGENCY_PRODUCTs}
                onClickFunc = {onClickProducts}
                title = {subLang.agency_products}
            />
        </>
    )
}


export default withRouter(AgencyNavigator)