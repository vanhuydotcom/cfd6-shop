import { Link } from "react-router-dom"
import useTranslate from "../../../core/useTranslate"

export default function TopNav() {
    let { t } = useTranslate()

    return (
        <>
            {/* NAVBAR */}
            <div className="navbar navbar-topbar navbar-expand-xl navbar-light bg-light">
                <div className="container">
                    {/* Promo */}
                    <div className="mr-xl-8">
                        <i className="fe fe-truck mr-2" /> <span className="heading-xxxs">{t('Free shipping worldwide')}</span>
                    </div>
                    {/* Toggler */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#topbarCollapse" aria-controls="topbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="topbarCollapse">
                        {/* Nav */}
                        <ul className="nav nav-divided navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#">
                                    <img className="mb-1 mr-1" src="/img/flags/usa.svg" alt="..." />{t(' United States')}
                                </Link>
                                {/* Menu */}
                                <div className="dropdown-menu minw-0">
                                    <Link className="dropdown-item" to="#!">
                                        <img className="mb-1 mr-2" src="/img/flags/usa.svg" alt="USA" />{t(' United States')}
                                    </Link>
                                    <Link className="dropdown-item" to="#!">
                                        <img className="mb-1 mr-2" src="/img/flags/canada.svg" alt="Canada" />{t('Canada')}
                                    </Link>
                                    <Link className="dropdown-item" to="#!">
                                        <img className="mb-1 mr-2" src="/img/flags/germany.svg" alt="Germany" />{t('Germany')}
                                    </Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#">USD</Link>
                                {/* Menu */}
                                <div className="dropdown-menu minw-0">
                                    <Link className="dropdown-item" to="#!">USD</Link>
                                    <Link className="dropdown-item" to="#!">EUR</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#">{t('English')}</Link>
                                {/* Menu */}
                                <div className="dropdown-menu minw-0">
                                    <Link className="dropdown-item" to="#">{t('English')}</Link>
                                    <Link className="dropdown-item" to="#">{t('French')}</Link>
                                    <Link className="dropdown-item" to="#">{t('German')}</Link>
                                </div>
                            </li>
                        </ul>
                        {/* Nav */}
                        <ul className="nav navbar-nav mr-8">
                            <li className="nav-item">
                                <Link className="nav-link" to="./shipping-and-returns.html">{t('Shipping')}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="./faq.html">FAQ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="./contact-us.html">{t('Contact')}</Link>
                            </li>
                        </ul>
                        {/* Nav */}
                        <ul className="nav navbar-nav flex-row">
                            <li className="nav-item">
                                <Link className="nav-link text-gray-350" to="#!">
                                    <i className="fab fa-facebook-f" />
                                </Link>
                            </li>
                            <li className="nav-item ml-xl-n4">
                                <Link className="nav-link text-gray-350" to="#!">
                                    <i className="fab fa-twitter" />
                                </Link>
                            </li>
                            <li className="nav-item ml-xl-n4">
                                <Link className="nav-link text-gray-350" to="#!">
                                    <i className="fab fa-instagram" />
                                </Link>
                            </li>
                            <li className="nav-item ml-xl-n4">
                                <Link className="nav-link text-gray-350" to="#!">
                                    <i className="fab fa-medium" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}