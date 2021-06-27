import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { currency } from '../../util'
import { delItemCart, decreaseItemCart, increaseItemCart, addMoreCard } from '../../redux/action/cartAction'
import useTranslate from '../../core/useTranslate'
import { Link } from 'react-router-dom'
export const ShoppingCart = () => {
    let $ = window.$
    // let closeRef = useRef()
    // const handleClose = () => {
    //     closeRef.current.style.display = 'none'
    // }
    let { t } = useTranslate()
    let cart = useSelector(state => state.cart)
    return ReactDOM.createPortal(
        <div className="modal fixed-right fade" id="modalShoppingCart" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-vertical" role="document">
                {/* Full cart (add `.d-none` to disable it) */}
                {
                    cart?.num > 0 ? <div className="modal-content">
                        {/* Close */}
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <i className="fe fe-x" aria-hidden="true" />
                        </button>
                        {/* Header*/}
                        <div className="modal-header line-height-fixed font-size-lg">
                            <strong className="mx-auto">Your Cart ({cart?.num})</strong>
                        </div>
                        {/* List group */}
                        <ul className="list-group list-group-lg list-group-flush">
                            {
                                cart?.list.map((e) => <CartItem key={e._id} {...e} />)
                            }
                        </ul>
                        {/* Footer */}
                        <div className="modal-footer line-height-fixed font-size-sm bg-light mt-auto">
                            <strong>Subtotal</strong> <strong className="ml-auto">{currency(cart?.amount)}</strong>
                        </div>
                        {/* Buttons */}
                        <div className="modal-body">
                            <Link className="btn btn-block btn-dark " to="/checkout">Continue to Checkout</Link>
                            <a className="btn btn-block btn-outline-dark" href="/shopping-cart" >View Cart</a>
                        </div>
                    </div>
                        :
                        <div className="modal-content d-none">
                            {/* Close */}
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <i className="fe fe-x" aria-hidden="true" />
                            </button>
                            {/* Header*/}
                            <div className="modal-header line-height-fixed font-size-lg">
                                <strong className="mx-auto">Your Cart (0)</strong>
                            </div>
                            {/* Body */}
                            <div className="modal-body flex-grow-0 my-auto">
                                {/* Heading */}
                                <h6 className="mb-7 text-center">Your cart is empty 😞</h6>
                                {/* Button */}
                                <Link className="btn btn-block btn-outline-dark " to="/shop"  >
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                }

                {/* Empty cart (remove `.d-none` to enable it) */}

            </div>
        </div>,
        document.getElementById('root')
    );
}
function CartItem({ name, real_price, images, _id, cartNum }) {
    let price = currency(real_price * cartNum)
    let dispatch = useDispatch()
    const handleRemoveItemCart = (e) => {
        e.preventDefault()
        dispatch(delItemCart(_id))
    }
    const handleDecrease = (e) => {
        e.preventDefault()
        dispatch(decreaseItemCart({ _id, real_price }))
    }
    const handleIncrease = (e) => {
        e.preventDefault()
        dispatch(increaseItemCart({ _id, real_price }))
        console.log(_id);
    }
    let [input, setInput] = useState(cartNum)
    useEffect(() => {
        setInput(cartNum)
    }, [cartNum])
    const inputChange = (e) => {
        setInput(
            e.target.value
        )
    }
    const handleAddMoreCard = (e) => {
        if (e.charCode === 13) {
            let inputNumber = parseInt(input)
            dispatch(addMoreCard({ _id, inputNumber }))
        }
    }

    return (
        <li className="list-group-item">
            <div className="row align-items-center">
                <div className="col-4">
                    {/* Image */}
                    <a href="./product.html">
                        <img className="img-fluid" src={images?.[0]?.medium_url} alt="..." />
                    </a>
                </div>
                <div className="col-8">
                    {/* Title */}
                    <p className="font-size-sm font-weight-bold mb-6">
                        <a className="text-body" href="./product.html">{name}</a> <br />
                        <span className="text-muted">{price}</span>
                    </p>
                    {/*Footer */}
                    <div className="d-flex align-items-center">
                        {/* Select */}
                        <button className="cart__item-button" onClick={handleDecrease} >-</button>
                        <input className="cart__item-num" type='text' value={input} onChange={inputChange} onKeyPress={handleAddMoreCard} />
                        <button className="cart__item-button" onClick={handleIncrease}>+</button>
                        {/* Remove */}
                        <a className="font-size-xs text-gray-400 ml-auto" href="#!" onClick={handleRemoveItemCart}>
                            <i className="fe fe-x" /> Remove
                        </a>
                    </div>
                </div>
            </div>
        </li>
    )
}