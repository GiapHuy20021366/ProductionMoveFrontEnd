import React from "react";
import { FaBell } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { TbNotification } from "react-icons/tb";

import "../../js/sb-admin-2.min";
import "../../vendor/jquery/jquery.min";
import "../../vendor/bootstrap/js/bootstrap.bundle.min";
import "../../styles/sb-admin-2.min.css";
import "../../styles/font.css";
import { useHistory, withRouter } from "react-router";
import { paths } from "../../untils/constant";
import { useSelector } from "react-redux";

const Message = () => {
  const messages = useSelector((state) => state.message);
  const subLang = useSelector((state) => state.lang.AdminAccounts);
  const account = useSelector((state) => state.user.account);

  const history = useHistory();
  const onClickProducts = () => {
    switch (account.role) {
      case 1:
        return history.push(paths.ADMIN_PRODUCTS)
      case 2:
        return history.push(paths.FACTORY_PRODUCTS)
      case 3:
        return history.push(paths.AGENCY_PRODUCTS)
      case 4:
        return history.push(paths.MAINTENANCE_PRODUCTS)
      default:
        return "#"
    }

  }

  const getRole = (roleId) => {
    switch (roleId) {
      case 1:
        return subLang.admin;
      case 2:
        return subLang.factory;
      case 3:
        return subLang.agency;
      case 4:
        return subLang.maintain_center;
      default:
        return subLang.unknown;
    }
  };
  length = messages.list.length;

  const typeMessage = (message) => {
    if (message.content.type == "EXPORT_CONFIRM_NOTIFICATION") {
      return `đã xác nhận ${message.content.exports.length} sản phẩm được xuất đi.`;
    }
    if (message.content.type == "EXPORT_NOTIFICATION") {
      return `đã xuất ${message.content.exports.length} sản phẩm cần xác nhận.`;
    }
  };

  return (
    <li className="nav-item dropdown no-arrow mx-1">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="alertsDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="fas fa-fw fa-bell"></i>
        <span className="badge badge-danger badge-counter">
          {messages ? messages.list.length : ""}
        </span>
      </a>
      <div
        className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
        aria-labelledby="alertsDropdown"
      >
        <h6 className="dropdown-header">Alerts</h6>
        {messages.list.map((message) => {
          return (
            <div className="dropdown-item d-flex align-items-center" key={message.id}>
              <div>
                <div className="small text-gray-500">
                  {message.date.substring(0, 10)}
                </div>
                <span className="font-weight-bold">
                  {getRole(message.content.from.role)}{" "}
                  {message.content.from.name} {typeMessage(message)}{" "}

                  <a href="#" onClick={() => {
                    onClickProducts()
                  }}>
                    Xem chi tiết
                  </a>


                </span>
              </div>
            </div>
          );
        })}
        <button className="dropdown-item text-center small text-gray-500">
          Show All Alerts
        </button>
      </div>
    </li>
  );
};

export default Message;
