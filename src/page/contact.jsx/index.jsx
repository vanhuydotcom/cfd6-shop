
import React from "react";
import { FormContact } from "./component/FormContact";
import Info from "./component/Info";

export default function Contact() {
    return (
        <>
            {/* CONTENT */}
            <section className="pt-7 pb-12">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Heading */}
                            <h3 className="mb-10 text-center">Contact Us</h3>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <Info />
                        <FormContact />
                    </div>
                </div>
            </section>
        </>
    )
}