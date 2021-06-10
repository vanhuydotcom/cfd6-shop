import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductItem } from "../../../component/ProductItem";
import { productAction } from "../../../redux/action/productAction";
import { convertObjToQuery, convertQueryToObj } from "../../../util";

export default function ShopProduct() {
    let { product } = useSelector((state) => state.product)
    let dispatch = useDispatch()
    // let objUrl = convertQueryToObj()
    let page = convertObjToQuery()

    useEffect(() => {
        dispatch(productAction(page))
    }, [page])
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