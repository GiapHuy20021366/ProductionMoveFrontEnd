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

const FactoryNavigator = (probs) => {
    const subLang = useSelector(state => state.lang.FactoryNavigator)
    const history = useHistory()
    const onClickProducts = () => {
        history.push(paths.FACTORY_PRODUCTS)
        console.log(history)
    }

    return (
        <>
            <hr className="sidebar-divider" />
            <div className="sidebar-heading">{subLang.factory}</div>

            <NavItem
                pathname = {paths.FACTORY_PRODUCTS}
                onClickFunc = {onClickProducts}
                title = {subLang.factory_products}
            />
        </>
    )
}

export default withRouter(FactoryNavigator)