import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductItem } from "./ProductItem";
import { productAction } from "../../../redux/action/productAction";
import { convertObjToQuery, convertQueryToObj } from "../../../util";
import { LOADING } from "../../../redux/type";

export default function ShopProduct() {
    let { product } = useSelector((state) => state.product)

    return (
        <div className="row">
            {
                product?.map((e) => <ProductItem
                    {...e}
                    key={e._id}
                />)
            }
        </div>

    )
}