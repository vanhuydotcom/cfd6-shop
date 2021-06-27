import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { decreaseItemCart, delItemCart, increaseItemCart } from "../../../redux/action/cartAction";
import { currency } from "../../../util";

export default function CartItem(props) {
    let dispatch = useDispatch()


    return (
        <li className="list-group-item">
            <div className="row align-items-center">
                <div className="col-4">
                    {/* Image */}
                    <Link to={`/product/${props.slug}`}>
                        <img src={props.thumbnail_url} alt="..." className="img-fluid" />
                    </Link>
                </div>
                <div className="col">
                    {/* Title */}
                    <div className="d-flex mb-2 font-weight-bold">
                        <Link className="text-body" to={`/product/${props.slug}`}>{props.name}</Link>
                    </div>
                    <div className="mb-2 font-size-sm">
                        <span className="ml-auto">Price: {currency(props.real_price * props.cartNum)}</span>
                    </div>
                    {/* Text */}
                    {/* <p className="mb-7 font-size-sm text-muted">
                        Color: Brown
                    </p> */}
                    {/*Footer */}
                    <div className="d-flex align-items-center">
                        <button className="cart__item-button" onClick={(e) => { e.preventDefault(); dispatch(decreaseItemCart(props._id)) }} >-</button>
                        <input className="cart__item-num" type='text' value={props?.cartNum} />
                        <button className="cart__item-button" onClick={(e) => { e.preventDefault(); dispatch(increaseItemCart(props._id)) }}>+</button>
                        <a className="font-size-xs text-gray-400 ml-auto" href="#!" onClick={(e) => { e.preventDefault(); dispatch(delItemCart(props._id)) }}>
                            <i className="fe fe-x" /> Remove
                        </a>
                    </div>
                </div>
            </div>
        </li>
    )
}