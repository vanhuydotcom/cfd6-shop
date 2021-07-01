import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import useTranslate from '../../core/useTranslate'
import yup from '../../hook/yupPattern'
import { yupResolver } from '@hookform/resolvers/yup';
import ListGroupCheckout from './component/ListGroupCheckout'
export default function Checkout() {
    let { t } = useTranslate()
    let auth = useSelector(state => state.auth)
    const schema = yup.object().shape({
        first_name: yup.string().required('Không để trống').name('Tên không đúng định dạng'),
        last_name: yup.string().required('Không để trống').name('Tên không đúng định dạng'),
        email: yup.string().required('Không để trống').email('Email không đúng định dạng'),
        company: yup.string().required('Không để trống').name('Tên không đúng định dạng'),
        country: yup.string().required('Không để trống').email('Email không đúng định dạng'),
        address: yup.string().required('Không để trống'),
        city: yup.string().required('Không để trống'),
        zip: yup.number().integer('Postcode không đúng'),
        phone: yup.string().required('Không để trống').phone('Số điện thoại không đúng')

    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema)
    })
    const onSubmit = (data) => {
        //Gọi API để cập nhật dữ liệu ở đây
        console.log(data);
    };
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-12 col-md-7">
                                {/* Form */}
                                {/* Heading */}
                                <h6 className="mb-7">Billing Details</h6>
                                {/* Billing details */}
                                <div className="row mb-9">
                                    <div className="col-12 col-md-6">
                                        {/* First Name */}
                                        <div className="form-group">
                                            <label htmlFor="checkoutBillingFirstName">First Name *</label>
                                            <input value={auth.login ? auth.login.first_name : null} {...register('first_name')} className="form-control form-control-sm" id="checkoutBillingFirstName" type="text" placeholder="First Name" />
                                            {errors?.first_name && <p className="error_text">{errors.first_name?.message}</p>}

                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        {/* Last Name */}
                                        <div className="form-group">
                                            <label htmlFor="checkoutBillingLastName">Last Name *</label>
                                            <input value={auth.login ? auth.login.last_name : null} {...register('last_name')} className="form-control form-control-sm" id="checkoutBillingLastName" type="text" placeholder="Last Name" />
                                            {errors?.last_name && <p className="error_text">{errors.last_name?.message}</p>}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        {/* Email */}
                                        <div className="form-group">
                                            <label htmlFor="checkoutBillingEmail">Email *</label>
                                            <input value={auth.login ? auth.login.email : null} {...register('email')} className="form-control form-control-sm" id="checkoutBillingEmail" type="email" placeholder="Email" />
                                            {errors?.email && <p className="error_text">{errors.email?.message}</p>}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        {/* Company Name */}
                                        <div className="form-group">
                                            <label htmlFor="checkoutBillingCompany">Company name *</label>
                                            <input {...register('company')} className="form-control form-control-sm" id="checkoutBillingCompany" type="text" placeholder="Company name (optional)" />
                                            {errors?.company && <p className="error_text">{errors.company?.message}</p>}

                                        </div>
                                    </div>
                                    <div className="col-12">
                                        {/* Country */}
                                        <div className="form-group">
                                            <label htmlFor="checkoutBillingCountry">Country *</label>
                                            <input {...register('country')} className="form-control form-control-sm" id="checkoutBillingCountry" type="text" placeholder="Country" />
                                            {errors?.country && <p className="error_text">{errors.country?.message}</p>}

                                        </div>
                                    </div>
                                    <div className="col-12">
                                        {/* Address Line 1 */}
                                        <div className="form-group">
                                            <label htmlFor="checkoutBillingAddress">Address Line 1 *</label>
                                            <input {...register('address')} className="form-control form-control-sm" id="checkoutBillingAddress" type="text" placeholder="Address Line 1" />
                                            {errors?.address && <p className="error_text">{errors.address?.message}</p>}

                                        </div>
                                    </div>
                                    <div className="col-12">
                                        {/* Address Line 2 */}
                                        <div className="form-group">
                                            <label htmlFor="checkoutBillingAddressTwo">Address Line 2</label>
                                            <input {...register('address_line_2')} className="form-control form-control-sm" id="checkoutBillingAddressTwo" type="text" placeholder="Address Line 2 (optional)" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        {/* Town / City */}
                                        <div className="form-group">
                                            <label htmlFor="checkoutBillingTown">Town / City *</label>
                                            <input {...register('city')} className="form-control form-control-sm" id="checkoutBillingTown" type="text" placeholder="Town / City" />
                                            {errors?.city && <p className="error_text">{errors.city?.message}</p>}

                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        {/* ZIP / Postcode */}
                                        <div className="form-group">
                                            <label htmlFor="checkoutBillingZIP">ZIP / Postcode *</label>
                                            <input {...register('zip')} className="form-control form-control-sm" id="checkoutBillingZIP" type="number" placeholder="ZIP / Postcode" />
                                            {errors?.zip && <p className="error_text">{errors.zip?.message}</p>}

                                        </div>
                                    </div>
                                    <div className="col-12">
                                        {/* Mobile Phone */}
                                        <div className="form-group mb-0">
                                            <label htmlFor="checkoutBillingPhone">Mobile Phone *</label>
                                            <input {...register('phone')} className="form-control form-control-sm" id="checkoutBillingPhone" type="tel" placeholder="Mobile Phone" />
                                            {errors?.phone && <p className="error_text">{errors.phone?.message}</p>}

                                        </div>
                                    </div>
                                </div>
                                {/* Heading */}
                                <h6 className="mb-7">Shipping Details</h6>
                                {/* Shipping details */}
                                <div className="table-responsive mb-6">
                                    <table className="table table-bordered table-sm table-hover mb-0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="custom-control custom-radio">
                                                        <input className="custom-control-input" id="checkoutShippingStandard" name="shipping" type="radio" />
                                                        <label className="custom-control-label text-body text-nowrap" htmlFor="checkoutShippingStandard">
                                                            Standard Shipping
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>Delivery in 5 - 7 working days</td>
                                                <td>$8.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="custom-control custom-radio">
                                                        <input className="custom-control-input" id="checkoutShippingExpress" name="shipping" type="radio" />
                                                        <label className="custom-control-label text-body text-nowrap" htmlFor="checkoutShippingExpress">
                                                            Express Shipping
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>Delivery in 3 - 5 working days</td>
                                                <td>$12.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="custom-control custom-radio">
                                                        <input className="custom-control-input" id="checkoutShippingShort" name="shipping" type="radio" />
                                                        <label className="custom-control-label text-body text-nowrap" htmlFor="checkoutShippingShort">
                                                            1 - 2 Shipping
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>Delivery in 1 - 2 working days</td>
                                                <td>$18.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="custom-control custom-radio">
                                                        <input className="custom-control-input" id="checkoutShippingFree" name="shipping" type="radio" />
                                                        <label className="custom-control-label text-body text-nowrap" htmlFor="checkoutShippingFree">
                                                            Free Shipping
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>Living won't the He one every subdue
                                                    meat replenish face was you morning
                                                    firmament darkness.</td>
                                                <td>$0.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* Address */}
                                <div className="mb-9">
                                    {/* Checkbox */}
                                    <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" id="checkoutShippingAddress" type="checkbox" />
                                        <label className="custom-control-label font-size-sm" data-toggle="collapse" data-target="#checkoutShippingAddressCollapse" htmlFor="checkoutShippingAddress">
                                            Ship to a different address?
                                        </label>
                                    </div>
                                    {/* Collapse */}
                                    <div className="collapse" id="checkoutShippingAddressCollapse">
                                        <div className="row mt-6">
                                            <div className="col-12">
                                                {/* Country */}
                                                <div className="form-group">
                                                    <label htmlFor="checkoutShippingAddressCountry">Country *</label>
                                                    <input className="form-control form-control-sm" id="checkoutShippingAddressCountry" type="text" placeholder="Country" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                {/* Address Line 1 */}
                                                <div className="form-group">
                                                    <label htmlFor="checkoutShippingAddressLineOne">Address Line 1 *</label>
                                                    <input className="form-control form-control-sm" id="checkoutShippingAddressLineOne" type="text" placeholder="Address Line 1" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                {/* Address Line 2 */}
                                                <div className="form-group">
                                                    <label htmlFor="checkoutShippingAddressLineTwo">Address Line 2</label>
                                                    <input className="form-control form-control-sm" id="checkoutShippingAddressLineTwo" type="text" placeholder="Address Line 2 (optional)" />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                {/* Town / City */}
                                                <div className="form-group">
                                                    <label htmlFor="checkoutShippingAddressTown">Town / City *</label>
                                                    <input className="form-control form-control-sm" id="checkoutShippingAddressTown" type="text" placeholder="Town / City" />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                {/* Town / City */}
                                                <div className="form-group">
                                                    <label htmlFor="checkoutShippingAddressZIP">ZIP / Postcode *</label>
                                                    <input className="form-control form-control-sm" id="checkoutShippingAddressZIP" type="text" placeholder="ZIP / Postcode" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                {/* Button */}
                                                {/* <button className="btn btn-sm btn-outline-dark" type="submit">
                                Save Address
                            </button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Heading */}
                                <h6 className="mb-7">Payment</h6>
                                {/* List group */}
                                <div className="list-group list-group-sm mb-7">
                                    <div className="list-group-item">
                                        {/* Radio */}
                                        <div className="custom-control custom-radio">
                                            {/* Input */}
                                            <input className="custom-control-input" id="checkoutPaymentCard" name="payment" type="radio" data-toggle="collapse" data-action="show" data-target="#checkoutPaymentCardCollapse" />
                                            {/* Label */}
                                            <label className="custom-control-label font-size-sm text-body text-nowrap" htmlFor="checkoutPaymentCard">
                                                Credit Card <img className="ml-2" src="/img/brands/color/cards.svg" alt="..." />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="list-group-item collapse py-0" id="checkoutPaymentCardCollapse">
                                        {/* Form */}
                                        <div className="form-row py-5">
                                            <div className="col-12">
                                                <div className="form-group mb-4">
                                                    <label className="sr-only" htmlFor="checkoutPaymentCardNumber">Card Number</label>
                                                    <input className="form-control form-control-sm" id="checkoutPaymentCardNumber" type="text" placeholder="Card Number *" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group mb-4">
                                                    <label className="sr-only" htmlFor="checkoutPaymentCardName">Name on Card</label>
                                                    <input className="form-control form-control-sm" id="checkoutPaymentCardName" type="text" placeholder="Name on Card *" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="form-group mb-md-0">
                                                    <label className="sr-only" htmlFor="checkoutPaymentMonth">Month</label>
                                                    <select className="custom-select custom-select-sm" id="checkoutPaymentMonth">
                                                        <option>January</option>
                                                        <option>February</option>
                                                        <option>March</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="form-group mb-md-0">
                                                    <label className="sr-only" htmlFor="checkoutPaymentCardYear">Year</label>
                                                    <select className="custom-select custom-select-sm" id="checkoutPaymentCardYear">
                                                        <option>2017</option>
                                                        <option>2018</option>
                                                        <option>2019</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="input-group input-group-merge">
                                                    <input className="form-control form-control-sm" id="checkoutPaymentCardCVV" type="text" placeholder="CVV *" />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text" data-toggle="popover" data-placement="top" data-trigger="hover" data-content="The CVV Number on your credit card or debit card is a 3 digit number on VISA, MasterCard and Discover branded credit and debit cards.">
                                                            <i className="fe fe-help-circle" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-group-item">
                                        {/* Radio */}
                                        <div className="custom-control custom-radio">
                                            {/* Input */}
                                            <input className="custom-control-input" id="checkoutPaymentPaypal" name="payment" type="radio" data-toggle="collapse" data-action="hide" data-target="#checkoutPaymentCardCollapse" />
                                            {/* Label */}
                                            <label className="custom-control-label font-size-sm text-body text-nowrap" htmlFor="checkoutPaymentPaypal">
                                                <img src="/img/brands/color/paypal.svg" alt="..." />
                                            </label>
                                        </div>
                                    </div>
                                </div>



                            </div>
                            <div className="col-12 col-md-5 col-lg-4 offset-lg-1">

                                {/* List group */}
                                <ListGroupCheckout />
                                {/* Card */}
                                {/* Disclaimer */}

                                <button className="btn btn-block btn-dark">
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}