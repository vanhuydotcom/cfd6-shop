import { ProductItem } from "../../../component/ProductItem";

export default function ShopProduct(product) {

    return (
        <div className="row">
            {
                product?.data.map((e) => <ProductItem
                    {...e}
                    key={e._id}
                />)

            }
        </div>

    )
}