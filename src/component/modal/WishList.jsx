import React from 'react'
import ReactDOM from 'react-dom'
import { useSelector } from 'react-redux'
export const Wishlist = () => {
    let { error } = useSelector(state => state.user)
    return ReactDOM.createPortal(
        <div className="modal fade" id="modalWishlist" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                <div className="modal-content modal-custom">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <i className="fe fe-x" aria-hidden="true" />
                    </button>

                    <div className="container-fluid">
                        <div className="align-items-center align-custom">
                            <h4 className="mb-3 ">{error && error ? `⚡️${error}⚡️` : '⚡️Add product successful to wishlist⚡️'}</h4>

                        </div>
                    </div>



                </div>
            </div>
        </div>,
        document.getElementById('root')
    )
}