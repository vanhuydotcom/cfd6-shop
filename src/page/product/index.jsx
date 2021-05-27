import { Description } from "./component/Description";
import { ProductReplace } from "./component/ProductReplace";
import { ProductSummary } from "./component/ProductSummary";
import { Review } from "./component/Review";

export default function Product() {
    return (
        <>
            {/* PRODUCT */}
            <ProductSummary />
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