import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import useTranslate from '../../../../core/useTranslate'
export default function MainNav() {
    let { t } = useTranslate()
    let { path } = useDispatch()
    return (
        <>
            {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    {/* Brand */}
                    <Link className="navbar-brand" to="/">Shopper.</Link>
                    {/* Toggler */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        {/* Nav */}
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item ">
                                {/* Toggle */}
                                <Link className="nav-link" data-toggle="dropdown" to="/">{t('Home')}</Link>
                            </li>
                            <li className="nav-item  position-static">
                                {/* Toggle */}
                                <Link className="nav-link" data-toggle="dropdown" to="#">{t('Catalog')}</Link>

                            </li>
                            <li className="nav-item ">
                                {/* Toggle */}
                                <Link className="nav-link" data-toggle="dropdown" to="/shop">{t('Shop')}</Link>
                                {/* Menu */}
                            </li>
                            <li className="nav-item ">
                                {/* Toggle */}
                                <Link className="nav-link" data-toggle="dropdown" to="#">{t('Pages')}</Link>
                                {/* Menu */}
                            </li>
                            <li className="nav-item ">
                                {/* Toggle */}
                                <Link className="nav-link" data-toggle="dropdown" to="#">{t('Blog')}</Link>
                                {/* Menu */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="docs/getting-started.html">{t('Docs')}</Link>
                            </li>
                        </ul>
                        {/* Nav */}
                        <ul className="navbar-nav flex-row">
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="modal" to="#modalSearch">
                                    <i className="fe fe-search" />
                                </Link>
                            </li>
                            <li className="nav-item ml-lg-n4">
                                <Link className="nav-link" to="/account">
                                    <i className="fe fe-user" />
                                </Link>
                            </li>
                            <li className="nav-item ml-lg-n4">
                                <Link className="nav-link" to="/account/widhlist">
                                    <i className="fe fe-heart" />
                                </Link>
                            </li>
                            <li className="nav-item ml-lg-n4">
                                <Link className="nav-link" data-toggle="modal" to="#modalShoppingCart">
                                    <span data-cart-items={2}>
                                        <i className="fe fe-shopping-cart" />
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}