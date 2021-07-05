import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { logoutAction } from "../../redux/action/authAction";
export default function Account({ children }) {
    let { path } = useRouteMatch()
    let dispatch = useDispatch()
    let auth = useSelector(state => state.auth)
    if (!auth.login) return <Redirect to='/auth' />
    function LogoutHandle(e) {
        e.preventDefault()
        dispatch(logoutAction())
    }
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
                                <NavLink className="list-group-item list-group-item-action dropright-toggle " to={`${path}/order`}>
                                    Orders
                                </NavLink>
                                <NavLink className="list-group-item list-group-item-action dropright-toggle " to={`${path}/wishlist`}>
                                    Wishlist
                                </NavLink>
                                <NavLink className="list-group-item list-group-item-action dropright-toggle " exact to={`${path}`}>
                                    Personal Info
                                </NavLink>
                                <NavLink className="list-group-item list-group-item-action dropright-toggle " to={`${path}/address`}>
                                    Address
                                </NavLink>
                                <NavLink className="list-group-item list-group-item-action dropright-toggle " to={`${path}/payment`}>
                                    Payment Methods
                                </NavLink>
                                <NavLink className="list-group-item list-group-item-action dropright-toggle" onClick={LogoutHandle} to="#">
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