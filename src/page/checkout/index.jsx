import React from 'react'
import useTranslate from '../../core/useTranslate'
import CardCheckout from './component/CardCheckout'
import { FormCheckout } from './component/FormCheckout'
import ListGroupCheckout from './component/ListGroupCheckout'
export default function Checkout() {
    let { t } = useTranslate()
    return (
        <>
            {/* CONTENT */}
            <section className="pt-7 pb-12">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            {/* Heading */}
                            <h3 className="mb-4">Checkout</h3>
                            {/* Subheading */}
                            <p className="mb-10">
                                Already have an account? <a className="font-weight-bold text-reset" href="#!">Click here to login</a>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-7">
                            {/* Form */}
                            <FormCheckout />
                        </div>
                        <div className="col-12 col-md-5 col-lg-4 offset-lg-1">
                            {/* Heading */}
                            <h6 className="mb-7">Order Items (3)</h6>
                            {/* Divider */}
                            <hr className="my-7" />
                            {/* List group */}
                            <ListGroupCheckout />
                            {/* Card */}
                            <CardCheckout />
                            {/* Disclaimer */}
                            <p className="mb-7 font-size-xs text-gray-500">
                                {t("Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.")}
                            </p>
                            {/* Button */}
                            <button className="btn btn-block btn-dark">
                                Place Order
              </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}