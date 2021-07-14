import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import yup from '../../../../hook/yupPattern'
import { useHistory, useParams, useRouteMatch } from 'react-router'
import { convertObjToQuery, convertQueryToObj } from '../../../../util'
import { useDispatch, useSelector } from 'react-redux'
import { cardType } from '../../../../redux/action/userAction'

export default function Step1() {
    let dispatch = useDispatch()
    let history = useHistory()
    let { _id } = useParams()
    let schema = yup.object().shape({
        payment: yup.mixed('Hãy chọn phương thức thanh toán').required('Hãy chọn phương thức thanh toán')
    })
    let { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema)
    })


    const onSubmit = (data) => {
        dispatch(cardType(data))
    }
    return (
        <>
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Card */}
                <div className="form-group card card-sm border">
                    <div className="card-body">
                        {/* Radio */}
                        <div className="custom-control custom-radio">
                            {/* Input */}
                            <input {...register('payment')} value='Debit / Credit card' className="custom-control-input collapsed" id="checkoutPaymentCard" type="radio" />
                            {/* Label */}
                            <label className="custom-control-label d-flex justify-content-between font-size-sm text-body text-nowrap" htmlFor="checkoutPaymentCard">
                                I want to add Debit / Credit Card <img className="ml-2" src="/img/brands/color/cards.svg" alt="..." />
                            </label>
                        </div>
                    </div>
                </div>
                {/* Card */}
                <div className="form-group card card-sm border">
                    <div className="card-body">
                        {/* Radio */}
                        <div className="custom-control custom-radio">
                            {/* Input */}
                            <input {...register('payment')} value='Paypal' className="custom-control-input" id="checkoutPaymentPaypal" type="radio" />
                            {/* Label */}
                            <label className="custom-control-label d-flex justify-content-between font-size-sm text-body text-nowrap" htmlFor="checkoutPaymentPaypal">
                                I want to add PayPall <img src="/img/brands/color/paypal.svg" alt="..." />
                            </label>
                        </div>
                    </div>
                </div>
                {errors && <p className='error_text'>{errors?.payment?.message}</p>}
                {/* Button */}
                <button className="btn btn-dark" type="submit" >
                    Continue <i className="fe fe-arrow-right ml-2" />
                </button>
            </form>

        </>
    )
}
