import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import useTranslate from '../../core/useTranslate'
import yup from '../../hook/yupPattern'
import { yupResolver } from '@hookform/resolvers/yup';
import ListGroupCheckout from './component/ListGroupCheckout'
import { currency } from '../../util'
import { useState } from 'react'
import { orderAction } from '../../redux/action/cartAction'
import cartApi from '../../service/cartApi'
export default function Checkout() {
    let { t } = useTranslate()
    let dispatch = useDispatch()
    let value = {};
    let auth = useSelector(state => state.auth)
    let { num, list } = useSelector(state => state.cart)

    let shipping_fee = [0, 20000, 45000, 100000]
    let [fee, setFee] = useState([value])
    const checkedRadio = (e) => {
        let value = e.target.value;
        setFee({
            fee: [value]
        })
        console.log(fee);
    }
    let yearNow = (new Date()).getFullYear()
    const schema = yup.object().shape({
        first_name: yup.string().required('Không để trống').name('Tên không đúng định dạng'),
        last_name: yup.string().required('Không để trống').name('Tên không đúng định dạng'),
        email: yup.string().required('Không để trống').email('Email không đúng định dạng'),
        company: yup.string().required('Không để trống').name('Tên không đúng định dạng'),
        country: yup.string().required('Không để trống').name('Quốc gia không đúng định dạng'),
        address: yup.string().required('Không để trống'),
        city: yup.string().required('Không để trống'),
        zip: yup.string().required('Postcode không đúng'),
        phone: yup.string().required('Không để trống').phone('Số điện thoại không đúng'),
        shipping: yup.mixed().required('Hãy chọn phương thức vận chuyển'),
        payment: yup.mixed().required('Hãy chọn phương thức thanh toán'),
        card_id: yup.string().required('Không để trống'),
        card_name: yup.string().required('Không để trống'),
        card_cvv: yup.string().required('không để trống').max(3, 'cvv không đúng').min(3, 'cvv không đúng'),
        different_address: yup.boolean(),
        dif_country: yup.string().when('different_address', {
            is: true,
            then: yup.string().required('Không để trống').name('Quốc gia không đúng định dạng')
        }),
        dif_address: yup.string().when('different_address', {
            is: true,
            then: yup.string().required('Không để trống'),
        }),
        dif_city: yup.string().when('different_address', {
            is: true,
            then: yup.string().required('Không để trống').name('Thành phố không đúng định dạng')
        }),
        dif_zip: yup.string().when('different_address', {
            is: true,
            then: yup.string().required('Postcode không đúng')
        }),
    }
    )
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema)
    })
    const onSubmit = (data) => {
        //Gọi API để cập nhật dữ liệu ở đây
        dispatch(orderAction())
        console.log(data);
    };
    if (num === 0) return <Redirect to='/shop' />
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

                                {
                                    !auth.login ? <>
                                        Already have an account?
                                        <Link className="font-weight-bold text-reset" to="/auth">Click here to login</Link>
                                    </>
                                        : <p className="font-weight-bold text-reset" >{t(`Hello ${auth.login.first_name}`)}</p>
                                }
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
                                                        <input onClick={checkedRadio} value={shipping_fee[1]} className="custom-control-input" id="checkoutShippingStandard" {...register('shipping')} type="radio" />
                                                        <label className="custom-control-label text-body text-nowrap" htmlFor="checkoutShippingStandard">
                                                            Standard Shipping
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>Delivery in 5 - 7 working days</td>
                                                <td>{currency(shipping_fee[1])}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="custom-control custom-radio">
                                                        <input onClick={checkedRadio} value={shipping_fee[2]} className="custom-control-input" id="checkoutShippingExpress" {...register('shipping')} type="radio" />
                                                        <label className="custom-control-label text-body text-nowrap" htmlFor="checkoutShippingExpress">
                                                            Express Shipping
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>Delivery in 3 - 5 working days</td>
                                                <td>{currency(shipping_fee[2])}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="custom-control custom-radio">
                                                        <input onClick={checkedRadio} className="custom-control-input" id="checkoutShippingShort" value={shipping_fee[3]}{...register('shipping')} type="radio" />
                                                        <label className="custom-control-label text-body text-nowrap" htmlFor="checkoutShippingShort">
                                                            1 - 2 Shipping
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>Delivery in 1 - 2 working days</td>
                                                <td>{currency(shipping_fee[3])}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="custom-control custom-radio">
                                                        <input onClick={checkedRadio} className="custom-control-input" id="checkoutShippingFree" value={shipping_fee[0]} {...register('shipping')} type="radio" />
                                                        <label className="custom-control-label text-body text-nowrap" htmlFor="checkoutShippingFree">
                                                            Free Shipping
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>Living won't the He one every subdue
                                                    meat replenish face was you morning
                                                    firmament darkness.</td>
                                                <td style={{ width: '140px' }}>{currency(shipping_fee[0])}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {errors?.shipping && <p className="error_text">{errors.shipping?.message}</p>}
                                </div>
                                {/* Address */}
                                <div className="mb-9">
                                    {/* Checkbox */}
                                    <div className="custom-control custom-checkbox">
                                        <input {...register('different_address')} className="custom-control-input" id="checkoutShippingAddress" type="checkbox" />
                                        <label className="custom-control-label font-size-sm" data-toggle="collapse" data-target="#checkoutShippingAddressCollapse" htmlFor="checkoutShippingAddress">
                                            Ship to a different address?
                                        </label>

                                    </div>
                                    {errors?.different_address && <p className="error_text">{errors.dif_country?.message}</p>}
                                    {/* Collapse */}
                                    <div className="collapse" id="checkoutShippingAddressCollapse">
                                        <div className="row mt-6">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label htmlFor="checkoutShippingAddressCountry">Country *</label>
                                                    <input {...register('dif_country')} className="form-control form-control-sm" id="checkoutShippingAddressCountry" type="text" placeholder="Country" />
                                                    {errors?.dif_country && <p className="error_text">{errors.dif_country?.message}</p>}

                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label htmlFor="checkoutShippingAddressLineOne">Address Line 1 *</label>
                                                    <input  {...register('dif_address')} className="form-control form-control-sm" id="checkoutShippingAddressLineOne" type="text" placeholder="Address Line 1" />
                                                    {errors?.dif_address && <p className="error_text">{errors.dif_address?.message}</p>}

                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label htmlFor="checkoutShippingAddressLineTwo">Address Line 2</label>
                                                    <input {...register('dif_address_line_2')} className="form-control form-control-sm" id="checkoutShippingAddressLineTwo" type="text" placeholder="Address Line 2 (optional)" />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="checkoutShippingAddressTown">Town / City *</label>
                                                    <input {...register('dif_city')} className="form-control form-control-sm" id="checkoutShippingAddressTown" type="text" placeholder="Town / City" />
                                                    {errors?.dif_city && <p className="error_text">{errors.dif_city?.message}</p>}

                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="checkoutShippingAddressZIP">ZIP / Postcode *</label>
                                                    <input  {...register('dif_zip')} className="form-control form-control-sm" id="checkoutShippingAddressZIP" type="text" placeholder="ZIP / Postcode" />
                                                    {errors?.dif_zip && <p className="error_text">{errors.dif_zip?.message}</p>}

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
                                            <input className="custom-control-input" id="checkoutPaymentCard" {...register('payment')} value='credit_card' type="radio" data-toggle="collapse" data-action="show" data-target="#checkoutPaymentCardCollapse" />
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
                                                    <input {...register('card_id')} className="form-control form-control-sm" id="checkoutPaymentCardNumber" type="text" placeholder="Card Number *" />
                                                    {errors?.card_id && <p className="error_text">{errors.card_id?.message}</p>}

                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group mb-4">
                                                    <label className="sr-only" htmlFor="checkoutPaymentCardName">Name on Card</label>
                                                    <input {...register('card_name')} className="form-control form-control-sm" id="checkoutPaymentCardName" type="text" placeholder="Name on Card *" />
                                                    {errors?.card_name && <p className="error_text">{errors.card_name?.message}</p>}

                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="form-group mb-md-0">
                                                    <label className="sr-only" htmlFor="checkoutPaymentMonth">Month</label>
                                                    <select {...register('cart_month')} className="custom-select custom-select-sm" id="checkoutPaymentMonth">
                                                        <option value="1">{t('January')}</option>
                                                        <option value="2" >{t('February')}</option>
                                                        <option value="3" >{t('March')}</option>
                                                        <option value="4" >{t('April')} </option>
                                                        <option value="5" >{t('May')}</option>
                                                        <option value="6" >{t('June')}</option>
                                                        <option value="7" >{t('July')}</option>
                                                        <option value="8" >{t('August')}</option>
                                                        <option value="9" >{t('September')}</option>
                                                        <option value="10" >{t('October')}</option>
                                                        <option value="11" >{t('November')} </option>
                                                        <option value="12" >{t('December')}</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="form-group mb-md-0">
                                                    <label className="sr-only" htmlFor="checkoutPaymentCardYear">Year</label>
                                                    <select {...register('cart_year')} className="custom-select custom-select-sm" id="checkoutPaymentCardYear">
                                                        {
                                                            [].map.bind([...Array(50)])((e, i) => <option value={yearNow - 50 / 2 + i} key={i}>{yearNow - 50 / 2 + i}</option>)
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="input-group input-group-merge">
                                                    <input {...register('card_cvv')} className="form-control form-control-sm" id="checkoutPaymentCardCVV" type="number" placeholder="CVV *" />

                                                    <div className="input-group-append">
                                                        <span className="input-group-text" data-toggle="popover" data-placement="top" data-trigger="hover" data-content="The CVV Number on your credit card or debit card is a 3 digit number on VISA, MasterCard and Discover branded credit and debit cards.">
                                                            <i className="fe fe-help-circle" />
                                                        </span>
                                                    </div>
                                                    {errors?.card_cvv && <p className="error_text">{errors.card_cvv?.message}</p>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-group-item">
                                        {/* Radio */}
                                        <div className="custom-control custom-radio">
                                            {/* Input */}
                                            <input className="custom-control-input" id="checkoutPaymentPaypal" {...register('payment')} value='paypal' type="radio" data-toggle="collapse" data-action="hide" data-target="#checkoutPaymentCardCollapse" />
                                            {/* Label */}
                                            <label className="custom-control-label font-size-sm text-body text-nowrap" htmlFor="checkoutPaymentPaypal">
                                                <img src="/img/brands/color/paypal.svg" alt="..." />
                                            </label>
                                        </div>
                                    </div>
                                    {errors?.payment && <p className="error_text">{errors.payment?.message}</p>}

                                </div>



                            </div>
                            <div className="col-12 col-md-5 col-lg-4 offset-lg-1">

                                {/* List group */}
                                <ListGroupCheckout fee={fee ? fee?.fee : ''} />
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