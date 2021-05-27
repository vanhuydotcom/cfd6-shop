export const FAQItem = () => {
    return (
        <>
            <h5 className="mb-7">Orders:</h5>
            {/* List group */}
            <ul className="list-group list-group-flush-x mb-9" id="faqCollapseParentOne">
                <li className="list-group-item">
                    {/* Toggle */}
                    <a className="dropdown-toggle d-block font-size-lg font-weight-bold text-reset" data-toggle="collapse" href="#faqCollapseOne">
                        1. Bring of had which their whose you're it own?
                  </a>
                    {/* Collapse */}
                    <div className="collapse" id="faqCollapseOne" data-parent="#faqCollapseParentOne">
                        <div className="mt-5">
                            <p className="mb-0 font-size-lg text-gray-500">
                                Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth
                                hath rule creepeth own lesser years itself so seed fifth for grass.
                      </p>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    {/* Toggle */}
                    <a className="dropdown-toggle d-block font-size-lg font-weight-bold text-reset" data-toggle="collapse" href="#faqCollapseTwo">
                        2. Over shall air can't subdue fly divide him?
                  </a>
                    {/* Collapse */}
                    <div className="collapse" id="faqCollapseTwo" data-parent="#faqCollapseParentOne">
                        <div className="mt-5">
                            <p className="mb-0 font-size-lg text-gray-500">
                                Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth
                                hath rule creepeth own lesser years itself so seed fifth for grass.
                      </p>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    {/* Toggle */}
                    <a className="dropdown-toggle d-block font-size-lg font-weight-bold text-reset" data-toggle="collapse" href="#faqCollapseThree">
                        3. Waters one you'll creeping?
                  </a>
                    {/* Collapse */}
                    <div className="collapse" id="faqCollapseThree" data-parent="#faqCollapseParentOne">
                        <div className="mt-5">
                            <p className="mb-0 font-size-lg text-gray-500">
                                Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth
                                hath rule creepeth own lesser years itself so seed fifth for grass.
                      </p>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    {/* Toggle */}
                    <a className="dropdown-toggle d-block font-size-lg font-weight-bold text-reset" data-toggle="collapse" href="#faqCollapseFour">
                        4. Fowl, given morning seed fruitful kind beast be?
                  </a>
                    {/* Collapse */}
                    <div className="collapse" id="faqCollapseFour" data-parent="#faqCollapseParentOne">
                        <div className="mt-5">
                            <p className="mb-0 font-size-lg text-gray-500">
                                Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth
                                hath rule creepeth own lesser years itself so seed fifth for grass.
                      </p>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}