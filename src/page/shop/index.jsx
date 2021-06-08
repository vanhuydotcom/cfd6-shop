import React, { useEffect, useState } from 'react'
import { PaygiNation } from "./component/PagiNation";
import ShopBreadcumb from "./component/ShopBreadcrumb";
import ShopProduct from "./component/ShopProduct";
import ShopSidebar from "./component/ShopSidebar";
import Slider from "./component/Slider";
import ProductApi from '../../service/productApi'
export default function Shop() {
    let [product, setProDuct] = useState({
        data: []
    })
    useEffect(() => {
        ProductApi.productItem()
            .then(res => {
                setProDuct(res)

            })
    }, [])
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
                        <ShopBreadcumb />
                        {/* Products */}
                        <ShopProduct {...product} />
                        {/* Pagination */}
                        <PaygiNation />
                    </div>
                </div>
            </div>
        </section>
    )
}