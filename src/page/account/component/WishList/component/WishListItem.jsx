import useTranslate from "../../../../../core/useTranslate"

export default function WishListItem() {
    let { t } = useTranslate()
    const _remove = () => {

    }
    return (
        <div className="col-6 col-md-4">
            <div className="card mb-7">
                {/* Image */}
                <div className="card-img">
                    {/* Action */}
                    <button onClick={_remove} className="btn btn-xs btn-circle btn-white-primary card-action card-action-right">
                        <i className="fe fe-x" />
                    </button>
                    {/* Button */}
                    <button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
                        <i className="fe fe-eye mr-2 mb-1" /> {t('Quick View')}
                    </button>
                    {/* Image */}
                    {/* <img className="card-img-top" src={images?.[0]?.medium_url} alt="..." /> */}
                </div>
                {/* Body */}
                <div className="card-body font-weight-bold text-center">
                    {/* <a className="text-body" href="product.html">{name}</a> <br />
                    <span>
                        {
                            discount > 0 && <span className="font-size-xs text-gray-350 text-decoration-line-through">{new Intl.NumberFormat('vn').format(price)}</span>
                        }

                        <span className="text-primary">{real_price_text} vnđ</span>
                    </span> */}
                </div>
            </div>
        </div>
    )
}