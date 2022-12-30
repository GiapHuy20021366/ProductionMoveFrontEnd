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
import { parseMonths, parseModels } from "../../untils/parseData";



const AgencyStatistic = () => {
  const account = useSelector(state => state.user.account)
  const [purchases, setPurchases] = useState([])
  const [models, setModels] = useState(['Model', 'Total'])

  const options = {
    title: "Productlines",
  };

  useEffect(async () => {
    const purchasesRes = await useCallApi(
      apiUrls.GET_PRODUCTS_BY_QUERY,
      {
        associates: {
          purchase: {
            customer: true,
            dealer: true
          },
          model: true
        }
      }
    ).then(({ data }) => {
      const products = data.rows
      const productsFilter = products.filter((product) => {
        return product?.purchase && product.purchase.dealer.id === account.id
      })
      // console.log(productsFilter)
      setPurchases(parseMonths(productsFilter))
      setModels(parseModels(productsFilter))
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <Chart data={purchases} />
      <Piee data={models} title={'Productlines'} />
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
