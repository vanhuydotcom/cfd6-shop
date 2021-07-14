import { useDispatch, useSelector } from "react-redux"
import { currency } from "../../../util";
import addCart from '../../../redux/action/cartAction'
import { getProductDetail } from "../../../redux/action/productAction";
export default function TopSeller() {
    let { phone_rating, sport_rating, consumer_rating } = useSelector(state => state.product)
    let dispatch = useDispatch()
    const addCart = (e) => {
        dispatch(addCart(e.props))
    }
    return (
        <>
            {/* TOP SELLERS */}
            <section className="py-12">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                            {/* Heading */}
                            <h2 className="mb-4 text-center">Top month Sellers</h2>
                            {/* Nav */}
                            <div className="nav justify-content-center mb-10">
                                <a className="nav-link active " href="#topSellersTab1" data-toggle="tab">Điện Thoại</a>
                                <a className="nav-link" href="#topSellersTab2" data-toggle="tab">Thể Thao</a>
                                <a className="nav-link" href="#topSellersTab3" data-toggle="tab">Hàng Tiêu Dùng</a>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade show active " id="topSellersTab1">
                            <div className="row">
                                {
                                    phone_rating && phone_rating.map((e, i) => {
                                        if (i < 8) {
                                            return (
                                                <div className="col-6 col-md-4 col-lg-3">
                                                    {/* Card */}
                                                    <div className="card mb-7">
                                                        {/* Badge */}
                                                        <div className="badge badge-white card-badge card-badge-left text-uppercase">
                                                            -{e.discount_rate}%
                                                        </div>
                                                        {/* Image */}
                                                        <div className="card-img">
                                                            {/* Image */}
                                                            <a className="card-img-hover" href="product.html">
                                                                <img className="card-img-top card-img-back" src={e.thumbnail_url} alt="..." />
                                                                <img className="card-img-top card-img-front" src={e.thumbnail_url} alt="..." />
                                                            </a>
                                                            {/* Actions */}
                                                            <div className="card-actions">
                                                                <span className="card-action">
                                                                    <button className="btn btn-xs btn-circle btn-white-primary" onClick={dispatch.bind(null, getProductDetail(e?.slug))} data-toggle="modal" data-target="#modalProduct">
                                                                        <i className="fe fe-eye" />
                                                                    </button>
                                                                </span>
                                                                <span className="card-action">
                                                                    <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button" onclick={addCart}>
                                                                        <i className="fe fe-shopping-cart" />
                                                                    </button>
                                                                </span>
                                                                <span className="card-action">
                                                                    <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                                                        <i className="fe fe-heart" />
                                                                    </button>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Body */}
                                                        <div className="card-body px-0">
                                                            {/* Category */}
                                                            {/* <div className="font-size-xs">
                                                                <a className="text-muted" href="shop.html">Shoes</a>
                                                            </div> */}
                                                            {/* Title */}
                                                            <div className="font-weight-bold">
                                                                <a className="text-body" href="product.html">
                                                                    {e.name}
                                                                </a>
                                                            </div>
                                                            {/* Price */}
                                                            <div className="font-weight-bold">
                                                                <span className="font-size-xs text-gray-350 text-decoration-line-through">{currency(e.price)}</span>
                                                                <span className="text-primary">{currency(e.real_price)}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                        <div className="tab-pane fade show " id="topSellersTab2">
                            <div className="row">
                                {
                                    sport_rating && sport_rating.map((e, i) => {
                                        if (i < 8) {
                                            return (
                                                <div className="col-6 col-md-4 col-lg-3">
                                                    {/* Card */}
                                                    <div className="card mb-7">
                                                        {/* Badge */}
                                                        <div className="badge badge-white card-badge card-badge-left text-uppercase">
                                                            -{e.discount_rate}%
                                                        </div>
                                                        {/* Image */}
                                                        <div className="card-img">
                                                            {/* Image */}
                                                            <a className="card-img-hover" href="product.html">
                                                                <img className="card-img-top card-img-back" src={e.thumbnail_url} alt="..." />
                                                                <img className="card-img-top card-img-front" src={e.thumbnail_url} alt="..." />
                                                            </a>
                                                            {/* Actions */}
                                                            <div className="card-actions">
                                                                <span className="card-action">
                                                                    <button className="btn btn-xs btn-circle btn-white-primary" onClick={dispatch.bind(null, getProductDetail(e?.slug))} data-toggle="modal" data-target="#modalProduct">
                                                                        <i className="fe fe-eye" />
                                                                    </button>
                                                                </span>
                                                                <span className="card-action">
                                                                    <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                                                        <i className="fe fe-shopping-cart" />
                                                                    </button>
                                                                </span>
                                                                <span className="card-action">
                                                                    <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                                                        <i className="fe fe-heart" />
                                                                    </button>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Body */}
                                                        <div className="card-body px-0">
                                                            {/* Category */}
                                                            {/* <div className="font-size-xs">
                                                                <a className="text-muted" href="shop.html">Shoes</a>
                                                            </div> */}
                                                            {/* Title */}
                                                            <div className="font-weight-bold">
                                                                <a className="text-body" href="product.html">
                                                                    {e.name}
                                                                </a>
                                                            </div>
                                                            {/* Price */}
                                                            <div className="font-weight-bold">
                                                                <span className="font-size-xs text-gray-350 text-decoration-line-through">{currency(e.price)}</span>
                                                                <span className="text-primary">{currency(e.real_price)}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                        <div className="tab-pane fade show " id="topSellersTab3">
                            <div className="row">
                                {
                                    consumer_rating && consumer_rating.map((e, i) => {
                                        if (i < 8) {
                                            return (
                                                <div className="col-6 col-md-4 col-lg-3">
                                                    {/* Card */}
                                                    <div className="card mb-7">
                                                        {/* Badge */}
                                                        <div className="badge badge-white card-badge card-badge-left text-uppercase">
                                                            -{e.discount_rate}%
                                                        </div>
                                                        {/* Image */}
                                                        <div className="card-img">
                                                            {/* Image */}
                                                            <a className="card-img-hover" href="product.html">
                                                                <img className="card-img-top card-img-back" src={e.thumbnail_url} alt="..." />
                                                                <img className="card-img-top card-img-front" src={e.thumbnail_url} alt="..." />
                                                            </a>
                                                            {/* Actions */}
                                                            <div className="card-actions">
                                                                <span className="card-action">
                                                                    <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" onClick={dispatch.bind(null, getProductDetail(e?.slug))} data-target="#modalProduct">
                                                                        <i className="fe fe-eye" />
                                                                    </button>
                                                                </span>
                                                                <span className="card-action">
                                                                    <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                                                        <i className="fe fe-shopping-cart" />
                                                                    </button>
                                                                </span>
                                                                <span className="card-action">
                                                                    <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                                                        <i className="fe fe-heart" />
                                                                    </button>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Body */}
                                                        <div className="card-body px-0">
                                                            {/* Category */}
                                                            {/* <div className="font-size-xs">
                                                                <a className="text-muted" href="shop.html">Shoes</a>
                                                            </div> */}
                                                            {/* Title */}
                                                            <div className="font-weight-bold">
                                                                <a className="text-body" href="product.html">
                                                                    {e.name}
                                                                </a>
                                                            </div>
                                                            {/* Price */}
                                                            <div className="font-weight-bold">
                                                                <span className="font-size-xs text-gray-350 text-decoration-line-through">{currency(e.price)}</span>
                                                                <span className="text-primary">{currency(e.real_price)}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-12">
                            {/* Link  */}
                            <div className="mt-7 text-center">
                                <a className="link-underline" href="#!">Discover more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}