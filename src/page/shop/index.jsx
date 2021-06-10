import React, { useEffect, useState } from 'react'
import { Pagination } from "../../component/Pagination";
import ShopBreadcrumb from "./component/ShopBreadcrumb";
import ShopProduct from "./component/ShopProduct";
import ShopSidebar from "./component/ShopSidebar";
import Slider from "./component/Slider";
import ProductApi from '../../service/productApi'
import { convertObjToQuery, convertQueryToObj } from '../../util';
import { useDispatch, useSelector } from 'react-redux';
export default function Shop() {
    let product = useSelector(state => state.product)

    // let objUrl = convertQueryToObj()
    // let queryString = convertObjToQuery(objUrl)
    return (
        <section className="py-11">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3">
                        {/* Filters */}
                        <ShopSidebar />
                    </div>
                    <div className="col-12 col-md-8 col-lg-9">
                        {/* Slider */}
                        <Slider />
                        {/* Breadcrumb */}
                        <ShopBreadcrumb />
                        {/* Products */}
                        <ShopProduct />
                        {/* Pagination */}
                        <Pagination />
                    </div>
                </div>
            </div>
        </section>
    )
}