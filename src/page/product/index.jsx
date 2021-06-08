import { useEffect, useState } from "react";
import ProductApi from "../../service/productApi";
import { Description } from "./component/Description";
import { ProductReplace } from "./component/ProductReplace";
import { ProductSummary } from "./component/ProductSummary";
import { Review } from "./component/Review";

export default function Product() {
    let [productItem, setProductItem] = useState({
        data: []
    })
    useEffect(() => {
        ProductApi.ProductItem()
            .then(res => {
                setProductItem(res)
            })
    }, [])
    return (
        <>
            {/* PRODUCT */}
            <ProductSummary {...productItem.data} />
            {/* DESCRIPTION */}
            <Description />
            {/* PRODUCTS */}
            <ProductReplace />
            {/* REVIEWS */}
            <Review />
            {/* FEATURES */}
        </>
    )
}