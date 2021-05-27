import React from 'react'
import { NewCustomerForm } from "./component/NewCustomerForm";
import { ReturningCustomerForm } from "./component/ReturningCustomerForm";

export default function Auth() {
    return (
        <>
            {/* CONTENT */}
            <section className="py-12">
                <div className="container">
                    <div className="row">
                        <ReturningCustomerForm />
                        <NewCustomerForm />
                    </div>
                </div>
            </section>
        </>
    )
}