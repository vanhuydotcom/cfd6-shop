import { Link, Route, NavLink } from 'react-router-dom'
import useTranslate from '../../core/useTranslate'
import NotFound from '../../page/404'
import About from '../../page/about'
export const Header = () => {
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
            {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    {/* Brand */}
                    <Link className="navbar-brand" to="./overview.html">
                        Shopper.
            </Link>
                    {/* Toggler */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        {/* Nav */}
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <Link className="nav-link" data-toggle="dropdown" to="#">Home</Link>
                                {/* Menu */}
                                <div className="dropdown-menu">
                                    <div className="card card-lg">
                                        <div className="card-body">
                                            <ul className="list-styled font-size-sm">
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" to="./index.html">Default</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" to="./index-classic.html">Classic</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" to="./index-fashion.html">Fashion</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" to="./index-boxed.html">Boxed</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" to="./index-simple.html">Simple</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" to="./index-asymmetric.html">Asymmetric</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" to="./index-sidenav.html">Sidenav</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" to="./index-landing.html">Landing</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown position-static">
                                {/* Toggle */}
                                <Link className="nav-link" data-toggle="dropdown" to="#">Catalog</Link>
                                {/* Menu */}
                                <div className="dropdown-menu w-100">
                                    {/* Tabs */}
                                    <form className="mb-2 mb-lg-0 border-bottom-lg">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12">
                                                    {/* Nav */}
                                                    <nav className="nav nav-tabs nav-overflow font-size-xs border-bottom border-bottom-lg-0">
                                                        <a className="nav-link text-uppercase active" data-toggle="tab" to="#navTab">
                                                            Women
                              </a>
                                                        <a className="nav-link text-uppercase" data-toggle="tab" to="#navTab">
                                                            Men
                              </a>
                                                        <a className="nav-link text-uppercase" data-toggle="tab" to="#navTab">
                                                            Kids
                              </a>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    {/* Tab content */}
                                    <div className="card card-lg">
                                        <div className="card-body">
                                            <div className="tab-content">
                                                <div className="tab-pane fade show active" id="navTab">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-6 col-md">
                                                                {/* Heading */}
                                                                <div className="mb-5 font-weight-bold">Clothing</div>
                                                                {/* Links */}
                                                                <ul className="list-styled mb-6 mb-md-0 font-size-sm">
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">All Clothing</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Blouses &amp; Shirts</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Coats &amp; Jackets</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Dresses</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Hoodies &amp; Sweats</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Denim</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Jeans</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Jumpers &amp; Cardigans</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Leggings</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-6 col-md">
                                                                {/* Heading */}
                                                                <div className="mb-5 font-weight-bold">Shoes &amp; Boots</div>
                                                                {/* Links */}
                                                                <ul className="list-styled mb-6 mb-md-0 font-size-sm">
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">All Shoes &amp; Boots</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Branded Shoes</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Boots</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Heels</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Trainers</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Sandals</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Shoes</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Wide Fit Shoes</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-6 col-md">
                                                                {/* Heading */}
                                                                <div className="mb-5 font-weight-bold">Bags &amp; Accessories</div>
                                                                {/* Links */}
                                                                <ul className="list-styled mb-0 font-size-sm">
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">All Bags &amp; Accessories</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Accessories</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Bags &amp; Purses</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Luggage</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Belts</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Hats</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Hair Accessories</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Jewellery</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Travel Accessories</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-6 col-md">
                                                                {/* Heading */}
                                                                <div className="mb-5 font-weight-bold">Collections</div>
                                                                {/* Links */}
                                                                <ul className="list-styled mb-0 font-size-sm">
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">All Collections</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Occasionwear</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Going Out</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Workwear</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Holiday Shop</a>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <a className="list-styled-link" to="./shop.html">Jean Fit Guide</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-4 d-none d-lg-block">
                                                                {/* Card */}
                                                                <div className="card">
                                                                    {/* Image */}
                                                                    <img className="card-img" src="/img/products/product-110.jpg" alt="..." />
                                                                    {/* Overlay */}
                                                                    <div className="card-img-overlay bg-dark-0 bg-hover align-items-center">
                                                                        <div className="text-center">
                                                                            <a className="btn btn-white stretched-link" to="./shop.html">
                                                                                Shop Sweaters <i className="fe fe-arrow-right ml-2" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <Link className="nav-link" data-toggle="dropdown" to="#">Shop</Link>
                                {/* Menu */}
                                <div className="dropdown-menu" style={{ minWidth: '650px' }}>
                                    <div className="card card-lg">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    {/* Heading */}
                                                    <div className="mb-5 font-weight-bold">Shop</div>
                                                    {/* Links */}
                                                    <ul className="list-styled mb-7 font-size-sm">
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" to="./shop.html">Default</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" to="./shop-topbar.html">Topbar</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" to="./shop-collapse.html">Collapse</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" to="./shop-simple.html">Simple</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" to="./shop-masonry.html">Masonry</a>
                                                        </li>
                                                    </ul>
                                                    {/* Heading */}
                                                    <div className="mb-5 font-weight-bold">Product</div>
                                                    {/* Links */}
                                                    <ul className="list-styled font-size-sm">
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" to="./product.html">Default</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" to="./product-images-left.html">Images Left</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" to="./product-image-grid.html">Image Grid</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" to="./product-image-slider.html">Image Slider</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" to="./product-images-stacked.html">Images Stacked</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col">
                                                    {/* Heading */}
                                                    <div className="mb-5 font-weight-bold">Support</div>
                                                    {/* Links */}
                                                    <ul className="list-styled mb-7 font-size-sm">
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" to="./shopping-cart.html">Shopping Cart</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" to="./checkout.html">Checkout</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" to="./order-completed.html">Order Completed</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" to="./shipping-and-returns.html">Shipping &amp; Returns</a>
                                                        </li>
                                                    </ul>
                                                    {/* Heading */}
                                                    <div className="mb-5 font-weight-bold">Account</div>
                                                    {/* Links */}
                                                    <ul className="list-styled font-size-sm">
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" to="./account-order.html">Order</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" to="./account-orders.html">Orders</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" to="./account-wishlist.html">Wishlist</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" to="./account-personal-info.html">Personal Info</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" to="./account-address.html">Addresses</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" to="./account-address-edit.html">Addresses: New</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col">
                                                    {/* Links */}
                                                    <ul className="list-styled mb-7 font-size-sm">
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" to="./account-payment.html">Payment</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" to="./account-payment-edit.html">Payment: New</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" to="./account-payment-choose.html">Payment: Choose</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" to="./auth.html">Auth</a>
                                                        </li>
                                                    </ul>
                                                    {/* Heading */}
                                                    <div className="mb-5 font-weight-bold">Modals</div>
                                                    {/* Links */}
                                                    <ul className="list-styled font-size-sm">
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" to="#modalNewsletterHorizontal">
                                                                Newsletter: Horizontal
                                </a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" to="#modalNewsletterVertical">
                                                                Newsletter: Vertical
                                </a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" to="#modalProduct">
                                                                Product
                                </a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" to="#modalSearch">
                                                                Search
                                </a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" to="#modalShoppingCart">
                                                                Shopping Cart
                                </a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" to="#modalSizeChart">
                                                                Size Chart
                                </a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" to="#modalWaitList">
                                                                Wait List
                                </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <Link className="nav-link" data-toggle="dropdown" to="#">Pages</Link>
                                {/* Menu */}
                                <div className="dropdown-menu">
                                    <div className="card card-lg">
                                        <div className="card-body">
                                            <ul className="list-styled font-size-sm">
                                                <li className="list-styled-item">
                                                    <Link className="list-styled-link" to='/about'>About</Link>
                                                </li>
                                                <li className="list-styled-item">
                                                    <Link className="list-styled-link" to="./contact-us.html">Contact Us</Link>
                                                </li>
                                                <li className="list-styled-item">
                                                    <Link className="list-styled-link" to="./store-locator.html">Store Locator</Link>
                                                </li>
                                                <li className="list-styled-item">
                                                    <Link className="list-styled-link" to="./faq.html">FAQ</Link>
                                                </li>
                                                <li className="list-styled-item">
                                                    <Link className="list-styled-link" to="./coming-soon.html">Coming Soon</Link>
                                                </li>
                                                <li className="list-styled-item">
                                                    <Link className="list-styled-link" to='/404'>404</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <Link className="nav-link" data-toggle="dropdown" to="#">Blog</Link>
                                {/* Menu */}
                                <div className="dropdown-menu">
                                    <div className="card card-lg">
                                        <div className="card-body">
                                            <ul className="list-styled font-size-sm">
                                                <li className="list-styled-item">
                                                    <Link className="list-styled-link" to="./blog.html">Blog</Link>
                                                </li>
                                                <li className="list-styled-item">
                                                    <Link className="list-styled-link" to="./blog-post.html">Blog Post</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="docs/getting-started.html">Docs</Link>
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
                                <Link className="nav-link" to="./account-orders.html">
                                    <i className="fe fe-user" />
                                </Link>
                            </li>
                            <li className="nav-item ml-lg-n4">
                                <Link className="nav-link" to="./account-wishlist.html">
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

            {/* PROMO */}
            <div className="py-3 bg-dark bg-pattern mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Text */}
                            <div className="text-center text-white">
                                <span className="heading-xxs letter-spacing-xl">
                                    ⚡️ {t('Happy Holiday Deals on Everything')} ⚡️
                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}