import { useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import { convertObjToQuery, convertQueryToObj } from '../util'
export function Pagination() {
    let match = useRouteMatch()
    let { paginate } = useSelector(state => state.product)
    let totalPage = paginate?.totalPage,
        currentPage = paginate?.currentPage


    function renderPage() {
        if (totalPage === 1) return []
        let start = currentPage - 3
        if (start < 1) start = 1
        let end = currentPage + 3
        let list = []
        if (end > totalPage) {
            end = totalPage
        }
        for (let i = start; i <= end; i++) {
            list.push(
                <li className={`page-item ${currentPage === i ? 'active' : ''}`}>
                    <Link className="page-link" to={`${match.url}`}>{i}</Link>
                </li>
            )
        }
        return list

    }
    return (
        <nav className="d-flex justify-content-center justify-content-md-end">
            <ul className="pagination pagination-sm text-gray-400">
                {
                    currentPage > 1 && (
                        <li className="page-item">
                            <Link className="page-link page-link-arrow"
                                to={
                                    `${match.url}?`}
                            >
                                <i className="fa fa-caret-left" />
                            </Link>
                        </li>
                    )
                }
                {
                    renderPage()
                }
                {
                    currentPage < totalPage && (
                        <li className="page-item">
                            <Link className="page-link page-link-arrow"
                                to={
                                    `${match.url}`}
                            >
                                <i className="fa fa-caret-right" />
                            </Link>
                        </li>
                    )
                }

            </ul>
        </nav>
    )
}