import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Login } from './component/Login';
import { Register } from './component/Register';

export default function Auth() {
    let auth = useSelector(state => state.auth)
    if (auth.login) {
        return <Redirect to='/' />
    }
    return (
        <>
            {/* CONTENT */}
            <section className="py-12">
                <div className="container">
                    <div className="row">
                        <Login />
                        <Register />
                    </div>
                </div>
            </section>
        </>
    )
}