export default function ShopBreadcumb() {
    return (
        <>
            <div className="row align-items-center mb-7">
                <div className="col-12 col-md">
                    {/* Heading */}
                    <h3 className="mb-1">Womens' Clothing</h3>
                    {/* Breadcrumb */}
                    <ol className="breadcrumb mb-md-0 font-size-xs text-gray-400">
                        <li className="breadcrumb-item">
                            <a className="text-gray-400" href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item active">
                            Women's Clothing
                    </li>
                    </ol>
                </div>
                <div className="col-12 col-md-auto">
                    {/* Select */}
                    <select className="custom-select custom-select-xs">
                        <option selected>Most popular</option>
                    </select>
                </div>
            </div>
            {/* Tags */}
            <div className="row mb-7">
                <div className="col-12">
                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                        Shift dresses <a className="text-reset ml-2" href="#!" role="button">
                            <i className="fe fe-x" />
                        </a>
                    </span>
                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                        Summer <a className="text-reset ml-2" href="#!" role="button">
                            <i className="fe fe-x" />
                        </a>
                    </span>
                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                        M <a className="text-reset ml-2" href="#!" role="button">
                            <i className="fe fe-x" />
                        </a>
                    </span>
                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                        White <a className="text-reset ml-2" href="#!" role="button">
                            <i className="fe fe-x" />
                        </a>
                    </span>
                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                        Red <a className="text-reset ml-2" href="#!" role="button">
                            <i className="fe fe-x" />
                        </a>
                    </span>
                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                        Adidas <a className="text-reset ml-2" href="#!" role="button">
                            <i className="fe fe-x" />
                        </a>
                    </span>
                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                        $10.00 - $49.00 <a className="text-reset ml-2" href="#!" role="button">
                            <i className="fe fe-x" />
                        </a>
                    </span>
                    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                        $50.00 - $99.00 <a className="text-reset ml-2" href="#!" role="button">
                            <i className="fe fe-x" />
                        </a>
                    </span>
                </div>
            </div>

        </>
    )
}