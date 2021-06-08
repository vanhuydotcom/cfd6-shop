import { useEffect, useState } from "react"
import useTranslate from "../../../core/useTranslate"
import ProductApi from "../../../service/productApi"

export default function ShopSidebar() {
    let { t } = useTranslate()
    let [categories, setCategories] = useState({})
    useEffect(() => {
        ProductApi.category()
            .then(res => {
                setCategories(res)
            })
    }, [])
    console.log(categories);
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
                                    {/* {
                                        categories?.map((item) => (
                                            <li className="list-styled-item">
                                                <a className="list-styled-link" data-toggle="collapse" href="#blousesCollapse">
                                                    {item.title}
                                                </a>
                                            </li>
                                        ))} */}
                                    <li className="list-styled-item">
                                        {/* Toggle */}
                                        <a className="list-styled-link" data-toggle="collapse" href="#blousesCollapse">
                                            Blouses and Shirts
                            </a>
                                        {/* Collapse */}

                                    </li>
                                    <li className="list-styled-item">
                                        {/* Toggle */}
                                        <a className="list-styled-link" data-toggle="collapse" href="#coatsCollapse">
                                            Coats and Jackets
                            </a>
                                        {/* Collapse */}
                                        <div className="collapse" id="coatsCollapse" data-parent="#productsNav">
                                            <div className="py-4 pl-5">
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input className="custom-control-input" id="coatsOne" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="coatsOne">
                                                        Coats, Jackets &amp; Vests
                                  </label>
                                                </div>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input className="custom-control-input" id="coatsTwo" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="coatsTwo">
                                                        Down Jackets &amp; Parkas
                                  </label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input className="custom-control-input" id="coatsThree" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="coatsThree">
                                                        Wool &amp; Pea Coats Plus-Size
                                  </label>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-styled-item">
                                        {/* Toggle */}
                                        <a className="list-styled-link" data-toggle="collapse" href="#dressesCollapse" aria-expanded="true">
                                            Dresses
                            </a>
                                        {/* Collapse */}
                                        <div className="collapse show" id="dressesCollapse" data-parent="#productsNav">
                                            <div className="py-4 pl-5">
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input className="custom-control-input" id="dressesOne" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="dressesOne">
                                                        A-line Dresses
                                  </label>
                                                </div>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input className="custom-control-input" id="dressesTwo" type="checkbox" defaultChecked />
                                                    <label className="custom-control-label" htmlFor="dressesTwo">
                                                        Shift Dresses
                                  </label>
                                                </div>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input className="custom-control-input" id="dressesThree" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="dressesThree">
                                                        Wrap Dresses
                                  </label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input className="custom-control-input" id="dressesFour" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="dressesFour">
                                                        Maxi Dresses
                                  </label>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-styled-item">
                                        {/* Toggle */}
                                        <a className="list-styled-link" data-toggle="collapse" href="#hoodiesCollapse">
                                            Hoodies and Sweats
                            </a>
                                        {/* Collapse */}
                                        <div className="collapse" id="hoodiesCollapse" data-parent="#productsNav">
                                            <div className="py-4 pl-5">
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input className="custom-control-input" id="hoodiesOne" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="hoodiesOne">
                                                        Activewear
                                  </label>
                                                </div>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input className="custom-control-input" id="hoodiesTwo" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="hoodiesTwo">
                                                        Fashion Hoodies &amp; Sweatshirts
                                  </label>
                                                </div>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input className="custom-control-input" id="hoodiesThree" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="hoodiesThree">
                                                        Big &amp; Tall Sweatshirts
                                  </label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input className="custom-control-input" id="hoodiesFour" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="hoodiesFour">
                                                        Big &amp; Tall Fashion Hoodies
                                  </label>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-styled-item">
                                        {/* Toggle */}
                                        <a className="list-styled-link" data-toggle="collapse" href="#denimCollapse">
                                            Denim
                            </a>
                                        {/* Collapse */}
                                        <div className="collapse" id="denimCollapse" data-parent="#productsNav">
                                            <div className="py-4 pl-5">
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input className="custom-control-input" id="denimOne" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="denimOne">
                                                        Women Shorts
                                  </label>
                                                </div>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input className="custom-control-input" id="denimTwo" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="denimTwo">
                                                        Juniors' Shorts
                                  </label>
                                                </div>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input className="custom-control-input" id="denimThree" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="denimThree">
                                                        Petite
                                  </label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input className="custom-control-input" id="denimFour" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="denimFour">
                                                        Women Plus Shorts
                                  </label>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-styled-item">
                                        {/* Toggle */}
                                        <a className="list-styled-link" data-toggle="collapse" href="#jeansCollapse">
                                            Jeans
                            </a>
                                        {/* Collapse */}
                                        <div className="collapse" id="jeansCollapse" data-parent="#productsNav">
                                            <div className="py-4 pl-5">
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input className="custom-control-input" id="jeansOne" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="jeansOne">
                                                        Men Jeans
                                  </label>
                                                </div>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input className="custom-control-input" id="jeansTwo" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="jeansTwo">
                                                        Men Big &amp; Tall Jeans
                                  </label>
                                                </div>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input className="custom-control-input" id="jeansThree" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="jeansThree">
                                                        Surf, Skate &amp; Street Clothing
                                  </label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input className="custom-control-input" id="jeansFour" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="jeansFour">
                                                        Men Big &amp; Tall Pants
                                  </label>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-styled-item">
                                        {/* Toggle */}
                                        <a className="list-styled-link" data-toggle="collapse" href="#jumpersCollapse">
                                            Jumpers and Cardigans
                            </a>
                                        {/* Collapse */}
                                        <div className="collapse" id="jumpersCollapse" data-parent="#productsNav">
                                            <div className="py-4 pl-5">
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input className="custom-control-input" id="jumpersOne" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="jumpersOne">
                                                        Sweaters Plus-Size
                                  </label>
                                                </div>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input className="custom-control-input" id="jumpersTwo" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="jumpersTwo">
                                                        Plus Sweaters
                                  </label>
                                                </div>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input className="custom-control-input" id="jumpersThree" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="jumpersThree">
                                                        Petite Cardigans
                                  </label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input className="custom-control-input" id="jumpersFour" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="jumpersFour">
                                                        Tops, Tees &amp; Blouses
                                  </label>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-styled-item">
                                        {/* Toggle */}
                                        <a className="list-styled-link" data-toggle="collapse" href="#legginsCollapse">
                                            Leggings
                            </a>
                                        {/* Collapse */}
                                        <div className="collapse" id="legginsCollapse" data-parent="#productsNav">
                                            <div className="py-4 pl-5">
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input className="custom-control-input" id="legginsOne" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="legginsOne">
                                                        Novelty Leggings
                                  </label>
                                                </div>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input className="custom-control-input" id="legginsTwo" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="legginsTwo">
                                                        Novelty Pants &amp; Capris
                                  </label>
                                                </div>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input className="custom-control-input" id="legginsThree" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="legginsThree">
                                                        Women Yoga Leggings
                                  </label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input className="custom-control-input" id="legginsFour" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="legginsFour">
                                                        Workout &amp; Training Leggings
                                  </label>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        {/* Toggle */}
                        <a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#seasonCollapse">
                            Season
                    </a>
                        {/* Collapse */}
                        <div className="collapse" id="seasonCollapse" data-toggle="simplebar" data-target="#seasonGroup">
                            <div className="form-group form-group-overflow mb-6" id="seasonGroup">
                                <div className="custom-control custom-checkbox mb-3">
                                    <input className="custom-control-input" id="seasonOne" type="checkbox" defaultChecked />
                                    <label className="custom-control-label" htmlFor="seasonOne">
                                        Summer
                          </label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input className="custom-control-input" id="seasonTwo" type="checkbox" />
                                    <label className="custom-control-label" htmlFor="seasonTwo">
                                        Winter
                          </label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input className="custom-control-input" id="seasonThree" type="checkbox" />
                                    <label className="custom-control-label" htmlFor="seasonThree">
                                        Spring &amp; Autumn
                          </label>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        {/* Toggle */}
                        <a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#sizeCollapse">
                            Size
                    </a>
                        {/* Collapse */}
                        <div className="collapse" id="sizeCollapse" data-toggle="simplebar" data-target="#sizeGroup">
                            <div className="form-group form-group-overlow mb-6" id="sizeGroup">
                                <div className="custom-control custom-control-inline custom-control-size mb-2">
                                    <input className="custom-control-input" id="sizeOne" type="checkbox" />
                                    <label className="custom-control-label" htmlFor="sizeOne">
                                        3XS
                          </label>
                                </div>
                                <div className="custom-control custom-control-inline custom-control-size mb-2">
                                    <input className="custom-control-input" id="sizeTwo" type="checkbox" disabled />
                                    <label className="custom-control-label" htmlFor="sizeTwo">
                                        2XS
                          </label>
                                </div>
                                <div className="custom-control custom-control-inline custom-control-size mb-2">
                                    <input className="custom-control-input" id="sizeThree" type="checkbox" />
                                    <label className="custom-control-label" htmlFor="sizeThree">
                                        XS
                          </label>
                                </div>
                                <div className="custom-control custom-control-inline custom-control-size mb-2">
                                    <input className="custom-control-input" id="sizeFour" type="checkbox" />
                                    <label className="custom-control-label" htmlFor="sizeFour">
                                        S
                          </label>
                                </div>
                                <div className="custom-control custom-control-inline custom-control-size mb-2">
                                    <input className="custom-control-input" id="sizeFive" type="checkbox" defaultChecked />
                                    <label className="custom-control-label" htmlFor="sizeFive">
                                        M
                          </label>
                                </div>
                                <div className="custom-control custom-control-inline custom-control-size mb-2">
                                    <input className="custom-control-input" id="sizeSix" type="checkbox" />
                                    <label className="custom-control-label" htmlFor="sizeSix">
                                        L
                          </label>
                                </div>
                                <div className="custom-control custom-control-inline custom-control-size mb-2">
                                    <input className="custom-control-input" id="sizeSeven" type="checkbox" />
                                    <label className="custom-control-label" htmlFor="sizeSeven">
                                        XL
                          </label>
                                </div>
                                <div className="custom-control custom-control-inline custom-control-size mb-2">
                                    <input className="custom-control-input" id="sizeEight" type="checkbox" disabled />
                                    <label className="custom-control-label" htmlFor="sizeEight">
                                        2XL
                          </label>
                                </div>
                                <div className="custom-control custom-control-inline custom-control-size mb-2">
                                    <input className="custom-control-input" id="sizeNine" type="checkbox" />
                                    <label className="custom-control-label" htmlFor="sizeNine">
                                        3XL
                          </label>
                                </div>
                                <div className="custom-control custom-control-inline custom-control-size mb-2">
                                    <input className="custom-control-input" id="sizeTen" type="checkbox" />
                                    <label className="custom-control-label" htmlFor="sizeTen">
                                        4XL
                          </label>
                                </div>
                                <div className="custom-control custom-control-inline custom-control-size mb-2">
                                    <input className="custom-control-input" id="sizeEleven" type="checkbox" />
                                    <label className="custom-control-label" htmlFor="sizeEleven">
                                        One Size
                          </label>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        {/* Toggle */}
                        <a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#colorCollapse">
                            Color
                    </a>
                        {/* Collapse */}
                        <div className="collapse" id="colorCollapse" data-toggle="simplebar" data-target="#colorGroup">
                            <div className="form-group form-group-overflow mb-6" id="colorGroup">
                                <div className="custom-control custom-control-color mb-3">
                                    <input className="custom-control-input" id="colorOne" type="checkbox" />
                                    <label className="custom-control-label text-dark" htmlFor="colorOne">
                                        <span className="text-body">Black</span>
                                    </label>
                                </div>
                                <div className="custom-control custom-control-color mb-3">
                                    <input className="custom-control-input" id="colorTwo" type="checkbox" defaultChecked />
                                    <label className="custom-control-label" style={{ color: '#f9f9f9' }} htmlFor="colorTwo">
                                        <span className="text-body">White</span>
                                    </label>
                                </div>
                                <div className="custom-control custom-control-color mb-3">
                                    <input className="custom-control-input" id="colorThree" type="checkbox" />
                                    <label className="custom-control-label text-info" htmlFor="colorThree">
                                        <span className="text-body">Blue</span>
                                    </label>
                                </div>
                                <div className="custom-control custom-control-color mb-3">
                                    <input className="custom-control-input" id="colorFour" type="checkbox" />
                                    <label className="custom-control-label text-primary" htmlFor="colorFour">
                                        <span className="text-body">Red</span>
                                    </label>
                                </div>
                                <div className="custom-control custom-control-color mb-3">
                                    <input className="custom-control-input" id="colorFive" type="checkbox" disabled />
                                    <label className="custom-control-label" htmlFor="colorFive" style={{ color: '#795548' }}>
                                        <span className="text-body">Brown</span>
                                    </label>
                                </div>
                                <div className="custom-control custom-control-color mb-3">
                                    <input className="custom-control-input" id="colorSix" type="checkbox" />
                                    <label className="custom-control-label text-gray-300" htmlFor="colorSix">
                                        <span className="text-body">Gray</span>
                                    </label>
                                </div>
                                <div className="custom-control custom-control-color mb-3">
                                    <input className="custom-control-input" id="colorSeven" type="checkbox" />
                                    <label className="custom-control-label" htmlFor="colorSeven" style={{ color: '#17a2b8' }}>
                                        <span className="text-body">Cyan</span>
                                    </label>
                                </div>
                                <div className="custom-control custom-control-color">
                                    <input className="custom-control-input" id="colorEight" type="checkbox" />
                                    <label className="custom-control-label" htmlFor="colorEight" style={{ color: '#e83e8c' }}>
                                        <span className="text-body">Pink</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        {/* Toggle */}
                        <a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#brandCollapse">
                            Brand
                    </a>
                        {/* Collapse */}
                        <div className="collapse" id="brandCollapse" data-toggle="simplebar" data-target="#brandGroup">
                            {/* Search */}
                            <div data-toggle="lists" data-options="{&quot;valueNames&quot;: [&quot;name&quot;]}">
                                {/* Input group */}
                                <div className="input-group input-group-merge mb-6">
                                    <input className="form-control form-control-xs search" type="search" placeholder="Search Brand" />
                                    {/* Button */}
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-border btn-xs">
                                            <i className="fe fe-search" />
                                        </button>
                                    </div>
                                </div>
                                {/* Form group */}
                                <div className="form-group form-group-overflow mb-6" id="brandGroup">
                                    <div className="list"><div className="custom-control custom-checkbox mb-3">
                                        <input className="custom-control-input" id="brandOne" type="checkbox" />
                                        <label className="custom-control-label name" htmlFor="brandOne">
                                            Dsquared2
                              </label>
                                    </div><div className="custom-control custom-checkbox mb-3">
                                            <input className="custom-control-input" id="brandTwo" type="checkbox" disabled />
                                            <label className="custom-control-label name" htmlFor="brandTwo">
                                                Alexander McQueen
                              </label>
                                        </div><div className="custom-control custom-checkbox mb-3">
                                            <input className="custom-control-input" id="brandThree" type="checkbox" />
                                            <label className="custom-control-label name" htmlFor="brandThree">
                                                Balenciaga
                              </label>
                                        </div><div className="custom-control custom-checkbox mb-3">
                                            <input className="custom-control-input" id="brandFour" type="checkbox" defaultChecked />
                                            <label className="custom-control-label name" htmlFor="brandFour">
                                                Adidas
                              </label>
                                        </div><div className="custom-control custom-checkbox mb-3">
                                            <input className="custom-control-input" id="brandFive" type="checkbox" />
                                            <label className="custom-control-label name" htmlFor="brandFive">
                                                Balmain
                              </label>
                                        </div><div className="custom-control custom-checkbox mb-3">
                                            <input className="custom-control-input" id="brandSix" type="checkbox" />
                                            <label className="custom-control-label name" htmlFor="brandSix">
                                                Burberry
                              </label>
                                        </div><div className="custom-control custom-checkbox mb-3">
                                            <input className="custom-control-input" id="brandSeven" type="checkbox" />
                                            <label className="custom-control-label name" htmlFor="brandSeven">
                                                Chloé
                              </label>
                                        </div><div className="custom-control custom-checkbox mb-3">
                                            <input className="custom-control-input" id="brandEight" type="checkbox" />
                                            <label className="custom-control-label name" htmlFor="brandEight">
                                                Kenzo
                              </label>
                                        </div><div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" id="brandNine" type="checkbox" />
                                            <label className="custom-control-label name" htmlFor="brandNine">
                                                Givenchy
                              </label>
                                        </div></div>
                                </div>
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