import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory, useRouteMatch } from "react-router-dom"
import { Skeleton } from '@material-ui/lab'
import useTranslate from "../../../core/useTranslate"
import { CATEGORIES_TITLE } from "../../../redux/type"
import { convertObjToQuery, convertQueryToObj } from "../../../util"
import { useLayoutEffect, useRef } from "react"
export default function ShopSidebar() {
    let { t } = useTranslate()
    let dispatch = useDispatch()
    let match = useRouteMatch()
    let history = useHistory()
    let { categories, loading } = useSelector(state => state.product)
    const handleClickCategory = (e) => {
        dispatch({
            type: CATEGORIES_TITLE,
            payload: e,
        })
    }
    let objUrl = convertQueryToObj()
    if (objUrl.page) {
        delete objUrl.page
    }
    let minRef = useRef()
    let maxRef = useRef()

    function _apply(e) {
        e.preventDefault()
        if (minRef.current.value || maxRef.current.value) {
            if (minRef.current.value) {
                objUrl.min = minRef.current.value.trim()
            } else {
                delete objUrl.min
            }
            if (maxRef.current.value) {
                objUrl.max = maxRef.current.value.trim()
            } else {
                delete objUrl.max
            }
            objUrl.page = 1
        }
        let queryString = convertObjToQuery(objUrl)
        history.push(match.url + "?" + queryString)
        console.log(queryString);
    }
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
                                    {/* <li className="list-styled-item">
                                        <Link className="list-styled-link" to="/shop"> All Products    </Link>
                                    </li> */}
                                    {
                                        categories.map((e) => (

                                            <li key={e._id} className="list-styled-item">
                                                {
                                                    !loading ? <Skeleton variant='rect' width='100%' height={16} /> :
                                                        (
                                                            <Link className={"list-styled-link "}
                                                                data-toggle="collapse"
                                                                to={`/shop?${convertObjToQuery({ ...objUrl, categories: e.id })}`}
                                                                onClick={() => handleClickCategory(e)}

                                                            >
                                                                {e.title}
                                                            </Link>
                                                        )
                                                }

                                            </li>
                                        ))
                                    }

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
                        <div className="collapse show" id="priceCollapse" data-toggle="simplebar" data-target="#priceGroup">
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
                                <input ref={minRef} defaultValue={objUrl.min} type="number" className="form-control form-control-xs" placeholder="1.000 vnđ" />
                                {/* Divider */}
                                <div className="text-gray-350 mx-2">‒</div>
                                {/* Input */}
                                <input ref={maxRef} defaultValue={objUrl.max} type="number" className="form-control form-control-xs" placeholder="100.000.000 vnđ" />
                            </div>
                            <button class="btn btn-dark btn-price" onClick={_apply}>Apply</button>
                        </div>
                    </li>
                </ul>
            </form>
        </>
    )
}