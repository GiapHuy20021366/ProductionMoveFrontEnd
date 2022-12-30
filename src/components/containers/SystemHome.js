import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../js/sb-admin-2.min";
import "../../vendor/jquery/jquery.min";
import "../../vendor/bootstrap/js/bootstrap.bundle.min";
import "../../styles/sb-admin-2.min.css";
import "../../styles/font.css";
import Chart from "../sub_components/homesystem/chart/Chart";
import Piee from "../sub_components/homesystem/PieChart";
import { roles } from "../../untils/constant";
import { useEffect } from "react";
import useCallApi from "../../untils/fetch";
import { apiUrls } from '../../untils/constant'

const parseMonths = (products) => {
  const times = []
  products.forEach((product) => {
    console.log(new Date(product.purchase.date))
  })
}

const AgencyStatistic = () => {
  const account = useSelector(state => state.user.account)
  const [purchases, setPurchases] = useState([])

  useEffect(async () => {
    const purchasesRes = await useCallApi(
      apiUrls.GET_PRODUCTS_BY_QUERY,
      {
        associates: {
          purchase: {
            customer: true,
            dealer: true
          }
        }
      }
    ).then(({ data }) => {
      const products = data.rows
      const productsFilter = products.filter((product) => {
        return product?.purchase && product.purchase.dealer.id === account.id
      })
      // console.log(productsFilter)
      parseMonths(productsFilter)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const data = [
    { name: "01/2022", total: 1200 },
    { name: "02/2022", total: 3000 },
    { name: "03/2022", total: 1002 },
    { name: "04/2022", total: 900 },
    { name: "05/2022", total: 500 },
    { name: "06/2022", total: 3200 },
    { name: "07/2022", total: 1200 },
    { name: "08/2022", total: 2300 },
    { name: "09/2022", total: 1300 },
    { name: "10/2022", total: 1700 },
    { name: "112022", total: 200 },
    { name: "12/2022", total: 700 },
  ];
  return (
    <>
      <Chart data={purchases} />
      <Piee />
    </>
  )
}


const SystemHome = () => {
  const subLang = useSelector((state) => state.lang.SystemHome);
  const account = useSelector(state => state.user.account)
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">{subLang.home}</h1>
      </div>
      <div className="row">
        {
          account.role === roles.AGENCY &&
          <AgencyStatistic />
        }
      </div>
    </div>
  );
};

export default SystemHome;
