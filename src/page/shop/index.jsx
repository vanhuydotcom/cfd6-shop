import { PayNation } from "./component/PagrNation";
import ShopBreadcumb from "./component/ShopBreadcrumb";
import ShopProduct from "./component/ShopProduct";
import ShopSidebar from "./component/ShopSidebar";
import Slider from "./component/Slider";

export default function Shop() {
    return (
        <section className="py-11">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3">
                        {/* Filters */}
                        <ShopSidebar />
                    </div>
                    <div className="col-12 col-md-8 col-lg-9">
                        {/* Slider */}
                        <Slider />
                        {/* Breadcrumb */}
                        <ShopBreadcumb />
                        {/* Products */}
                        <ShopProduct />
                        {/* Pagination */}
                        <PayNation />
                    </div>
                </div>
            </div>
        </section>
    )
}