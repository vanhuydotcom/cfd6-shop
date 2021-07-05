import { useSelector } from "react-redux";
import { Pagination } from "../../../../component";
import WishListItem from "./component/WishListItem";

export default function WishList() {
    let { paginate } = useSelector(state => state.product)
    return (

        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Products */}
            {/* <div className="row">
            {
                state.list.map(e => <WishlistItem key={e._id} {...e} />)
            }
        </div> */}
            <WishListItem />

            {/* Pagination */}
            <Pagination{...paginate} />

        </div>
    )
}