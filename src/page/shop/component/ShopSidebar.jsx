import { useEffect, useState } from "react"
import useTranslate from "../../../core/useTranslate"
import ProductApi from "../../../service/productApi"

export default function ShopSidebar() {
    let { t } = useTranslate()
    let [categories, setCategories] = useState()
    useEffect(() => {
        ProductApi.category()
            .then(res => {
                setCategories(res)
            })
    }, [])
    if (!categories) return 'loading...'
    return (
        <>
            {/* Filters */}
            <form className="mb-10 mb-md-0">
                <ul className="nav nav-vertical" id="filterNav">
                    <li className="nav-item">
                        {/* Toggle */}
                        <a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#categoryCollapse">
                            Category
                    </a>
                        {/* Collapse */}
                        <div className="collapse show" id="categoryCollapse">
                            <div className="form-group">
                                <ul className="list-styled mb-0" id="productsNav">
                                    <li className="list-styled-item">
                                        <a className="list-styled-link" href="#"> All Products    </a>
                                    </li>
                                    {
                                        categories.map((item) => (
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" data-toggle="collapse" href="#blousesCollapse">
                                                    {item.title}
                                                </a>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        {/* Toggle */}
                        <a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#priceCollapse">
                            Price
                    </a>
                        {/* Collapse */}
                        <div className="collapse" id="priceCollapse" data-toggle="simplebar" data-target="#priceGroup">
                            {/* Form group*/}
                            <div className="form-group form-group-overflow mb-6" id="priceGroup">
                                <div className="custom-control custom-checkbox mb-3">
                                    <input className="custom-control-input" id="priceOne" type="checkbox" defaultChecked />
                                    <label className="custom-control-label" htmlFor="priceOne">
                                        $10.00 - $49.00
                          </label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input className="custom-control-input" id="priceTwo" type="checkbox" defaultChecked />
                                    <label className="custom-control-label" htmlFor="priceTwo">
                                        $50.00 - $99.00
                          </label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input className="custom-control-input" id="priceThree" type="checkbox" />
                                    <label className="custom-control-label" htmlFor="priceThree">
                                        $100.00 - $199.00
                          </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input className="custom-control-input" id="priceFour" type="checkbox" />
                                    <label className="custom-control-label" htmlFor="priceFour">
                                        $200.00 and Up
                          </label>
                                </div>
                            </div>
                            {/* Range */}
                            <div className="d-flex align-items-center">
                                {/* Input */}
                                <input type="number" className="form-control form-control-xs" placeholder="$10.00" min={10} />
                                {/* Divider */}
                                <div className="text-gray-350 mx-2">‒</div>
                                {/* Input */}
                                <input type="number" className="form-control form-control-xs" placeholder="$350.00" max={350} />
                            </div>
                        </div>
                    </li>
                </ul>
            </form>
        </>
    )
}