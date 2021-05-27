import useTranslate from "../../../core/useTranslate"

export default function ListGroupCheckout() {
    let { t } = useTranslate()
    return (
        <ul className="list-group list-group-lg list-group-flush-y list-group-flush-x mb-7">
            <li className="list-group-item">
                <div className="row align-items-center">
                    <div className="col-4">
                        {/* Image */}
                        <a href="product.html">
                            <img src="/img/products/product-6.jpg" alt="..." className="img-fluid" />
                        </a>
                    </div>
                    <div className="col">
                        {/* Title */}
                        <p className="mb-4 font-size-sm font-weight-bold">
                            <a className="text-body" href="product.html">Cotton floral print Dress</a> <br />
                            <span className="text-muted">$40.00</span>
                        </p>
                        {/* Text */}
                        <div className="font-size-sm text-muted">
                            Size: M <br />
Color: Red
</div>
                    </div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row align-items-center">
                    <div className="col-4">
                        {/* Image */}
                        <a href="product.html">
                            <img src="/img/products/product-10.jpg" alt="..." className="img-fluid" />
                        </a>
                    </div>
                    <div className="col">
                        {/* Title */}
                        <p className="mb-4 font-size-sm font-weight-bold">
                            <a className="text-body" href="product.html">Suede cross body Bag</a> <br />
                            <span className="text-muted">$49.00</span>
                        </p>
                        {/* Text */}
                        <div className="font-size-sm text-muted">
                            Color: Brown
</div>
                    </div>
                </div>
            </li>
        </ul>
    )
}