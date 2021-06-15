import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { ErrorMes, useForm } from "../../../hook/useForm";
import { updateProfileAction } from "../../../redux/action/authAction";
import UserApi from "../../../service/userApi";
export default function PersonalInfo() {
    let auth = useSelector(state => state.auth)
    let data = useSelector(state => state.auth)
    let dispatch = useDispatch()
    let { register, handleSubmit, error, form, check } = useForm({
        first_name: auth.login.first_name,
        last_name: auth.login.last_name,
        email: auth.login.email,
        password: '',
        confirm_password: ''
    }, {
        rule: {
            first_name: {
                required: true,
            },
            last_name: {
                required: true,
            },

            password: {
                required: true,
            },
            confirm_password: {
                required: true,
                match: 'password'

            }
        },

        mes: {
            first_name: {
                required: 'Please enter your first name',
            },
            last_name: {
                required: 'Please enter your last name',
            },
            email: {
                required: 'Please enter your email',
                pattern: 'Your mail is not valid',
            },
            password: {
                required: 'Please enter your password',
            },
            confirm_password: {
                required: 'Please enter your password again',
                match: 'Password incorrect'

            }
        }
    })

    function formSubmitValidateSuccess(form) {
        let res = UserApi.updateProfile(form)
        if (res.data) {
            dispatch(updateProfileAction(res.data))
        }

    }
    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Form */}
            <form onSubmit={handleSubmit(formSubmitValidateSuccess)}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="accountfirst_name">First Name * </label>
                            <input className="form-control form-control-sm" id="accountfirst_name" type="text" placeholder="First Name *" {...register("first_name", { required: true })} />
                            <ErrorMes error={error.first_name} />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="accountlast_name">Last Name *  </label>
                            <input className="form-control form-control-sm" id="accountlast_name" type="text" placeholder="Last Name *" {...register('last_name', { required: true })} />
                            <ErrorMes error={error.last_name} />

                        </div>
                    </div>
                    <div className="col-12">
                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="accountEmail">Email Address *</label>
                            <input className="form-control form-control-sm" id="accountEmail" type="email" placeholder="Email Address *" disabled value={auth.login.email} />
                            <ErrorMes error={error.email} />

                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Password */}
                        <div className="form-group">
                            <label htmlFor="accountPassword">Password * </label>
                            <input className="form-control form-control-sm" id="accountPassword" type="password" placeholder="Current Password *" {...register('password', { required: true },)} />
                            <ErrorMes error={error.password} />

                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Password */}
                        <div className="form-group">
                            <label htmlFor="AccountNewPassword">Confirm Password * </label>
                            <input className="form-control form-control-sm" id="AccountNewPassword" type="password" placeholder="New Password *" {...register('confirm_password', { required: true, match: "password" })} />

                            <ErrorMes error={error.confirm_password} />

                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        {/* Birthday */}
                        <div className="form-group">
                            {/* Label */}
                            <label>Date of Birth</label>
                            {/* Inputs */}
                            <div className="form-row">
                                <div className="col-auto">
                                    {/* Date */}
                                    <label className="sr-only" htmlFor="accountDate">
                                        Date
                    </label>
                                    <select className="custom-select custom-select-sm" id="accountDate">
                                        <option>10</option>
                                        <option>11</option>
                                        <option selected>12</option>
                                    </select>
                                </div>
                                <div className="col">
                                    {/* Date */}
                                    <label className="sr-only" htmlFor="accountMonth">
                                        Month
                    </label>
                                    <select className="custom-select custom-select-sm" id="accountMonth">
                                        <option>January</option>
                                        <option selected>February</option>
                                        <option>March</option>
                                    </select>
                                </div>
                                <div className="col-auto">
                                    {/* Date */}
                                    <label className="sr-only" htmlFor="accountYear">
                                        Year
                    </label>
                                    <select className="custom-select custom-select-sm" id="accountYear">
                                        <option>1990</option>
                                        <option selected>1991</option>
                                        <option>1992</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        {/* Gender */}
                        <div className="form-group mb-8">
                            <label>Gender</label>
                            <div className="btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-sm btn-outline-border active">
                                    <input type="radio" name="gender" defaultChecked /> Male
                  </label>
                                <label className="btn btn-sm btn-outline-border">
                                    <input type="radio" name="gender" /> Female
                  </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        {/* Button */}
                        <button className="btn btn-dark" type="submit">Save Changes</button>
                    </div>
                </div>
            </form>
        </div>)
}