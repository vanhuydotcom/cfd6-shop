import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import { RouterConfig } from "../../core";
import Address from "./component/Address";
import OrderDetail from "./component/OrderDetail";
import Orders from "./component/Orders";
import Payment from "./component/Payment";
import PersonalInfo from "./component/PersonalInfo";
import WidhList from "./component/WidhList";
export default function Account({ children }) {
    let { path } = useRouteMatch()
    return (
        <section className="pt-7 pb-12">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        {/* Heading */}
                        <h3 className="mb-10">My Account</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-3">
                        {/* Nav */}
                        <nav className="mb-10 mb-md-0">
                            <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                                <NavLink className="list-group-item list-group-item-action dropright-toggle active" exact to={`${path}/order`}>
                                    Orders
  </NavLink>
                                <NavLink className="list-group-item list-group-item-action dropright-toggle " to={`${path}/widhlist`}>
                                    Widhlist
  </NavLink>
                                <NavLink className="list-group-item list-group-item-action dropright-toggle " to={`${path}/personal-info`}>
                                    Personal Info
  </NavLink>
                                <NavLink className="list-group-item list-group-item-action dropright-toggle " to={`${path}/address`}>
                                    Addresses
  </NavLink>
                                <NavLink className="list-group-item list-group-item-action dropright-toggle " to={`${path}/payment`}>
                                    Payment Methods
  </NavLink>
                                <NavLink className="list-group-item list-group-item-action dropright-toggle" to="#">
                                    Logout
  </NavLink>
                            </div>
                        </nav>
                    </div>
                    {children}

                </div>
            </div>
        </section>
    )
}