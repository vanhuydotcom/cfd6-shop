import React from 'react'
import { useSelector } from 'react-redux'
import { Rating, Skeleton } from '@material-ui/lab'
import { currency } from '../../../util'
export function ProductItem({ discount_rate, thumbnail_url, name, price, real_price, rating_average, discount }) {
    let out_price = currency(price),
        discount_price = currency(real_price)
    let { loading } = useSelector(state => state.product)
    return (
        <div className="col-6 col-md-4 col-lg-4">
            {/* Card */}
            <div className="card mb-7">
                {/* Badge */}
                {
                    !loading ? (<Skeleton variant='rect' width='100%' height={253} />)
                        : (<>
                            {
                                discount_rate > 0 ? (<div className="badge badge-white card-badge card-badge-left text-uppercase">
                                    {discount_rate}%
                                </div>) : null
                            }

                            {/* Image */}
                            <div className="card-img">
                                {/* Image */}
                                <a className="card-img-hover" href="product.html">
                                    <img className="card-img-top card-img-back" src={thumbnail_url} alt="..." />
                                    <img className="card-img-top card-img-front" src={thumbnail_url} alt="..." />
                                </a>
                                {/* Actions */}
                                <div className="card-actions">
                                    <span className="card-action">
                                        <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct">
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
                        </>
                        )
                }

                {/* Body */}
                <div className="card-body px-0">
                    {/* Category */}
                    {/* <div className="font-size-xs">
                        <a className="text-muted" href="shop.html">Shoes</a>
                    </div> */}
                    {/* Title */}
                    {
                        !loading ? <Skeleton variant='rect' width='100%' height={16} />
                            : (<div className="font-weight-bold">
                                <a className="text-body" href="product.html">
                                    {name}
                                </a>
                            </div>)
                    }
                    {
                        !loading ? <Skeleton variant='rect' width='100%' height={16} />
                            : (
                                <>
                                    {/* {
                                        rating_average > 0 ? (
                                            <div class="rating font-size-sm text-dark" data-value={rating_average} >
                                                <div class="rating-item">
                                                    <Rating rating={rating_average} />
                                                </div>
                                            </div>
                                        )
                                            : (
                                                <div class="rating font-size-sm text-dark" data-value={rating_average} >

                                                </div>
                                            )
                                    } */}

                                    <div class="rating font-size-sm text-dark" data-value={rating_average} >
                                        <div class="rating-item">
                                            <Rating defaultValue={rating_average} precision={0.5} />
                                        </div>
                                    </div>
                                    <div className="font-weight-bold">

                                        {
                                            discount === 0 ? (<>
                                                <span className="font-size-xs text-gray-350 text-decoration-line-through"></span>
                                                <span className="text-primary">{out_price} </span>
                                            </>
                                            )
                                                : (
                                                    <>
                                                        <span className="font-size-xs text-gray-350 text-decoration-line-through">{out_price}</span>
                                                        <span className="text-primary">{discount_price} </span>
                                                    </>)
                                        }
                                    </div>
                                </>
                            )
                    }

                    {/* Price */}

                </div>
            </div>
        </div>
    )
}