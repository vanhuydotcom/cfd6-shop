import React, { useEffect, useState } from 'react'
import { PayNation } from "./component/PagrNation";
import ShopBreadcumb from "./component/ShopBreadcrumb";
import ShopProduct from "./component/ShopProduct";
import ShopSidebar from "./component/ShopSidebar";
import Slider from "./component/Slider";
import ProductApi from '../../service/productApi'
export default function Shop({ chidren }) {
    let [productItem, setProDuctItem] = useState({
        data: []
    })
    useEffect(() => {
        ProductApi.productItem()
            .then(res => {
                setProDuctItem(res)

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
                        <ShopProduct {...productItem.data} />
                        {/* Pagination */}
                        <PayNation />
                    </div>
                </div>
            </div>
        </section>
    )
}