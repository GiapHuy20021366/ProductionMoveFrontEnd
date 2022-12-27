import React from "react";
import { useHistory } from "react-router";

function NavItem({ pathname, onClickFunc, title }) {
    const history = useHistory()
    return (
        <li className={`nav-item ${history.location.pathname.startsWith(pathname) ? 'active' : ''}`}>
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

export default NavItem