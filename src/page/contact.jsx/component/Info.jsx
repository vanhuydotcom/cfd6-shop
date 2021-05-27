import useTranslate from "../../../core/useTranslate"

export default function Info() {
    let { t } = useTranslate()
    return (
        <div className="col-12 col-md-4 col-xl-3">
            <aside className="mb-9 mb-md-0">
                {/* Heading */}
                <h6 className="mb-6">
                    <i className="fe fe-phone text-primary mr-4" /> Call to Us:
                </h6>
                {/* Text */}
                <p className="text-gray-500">
                    We're available from 10 am - 10 pm EST,
                    7 days a week.
                </p>
                <p>
                    <strong>Customer Service:</strong><br />
                    <a className="text-gray-500" href="tel:60146-389-574">6-146-389-574</a>
                </p>
                <p className="mb-0">
                    <strong>Careers:</strong><br />
                    <a className="text-gray-500" href="tel:60146-389-574">6-146-389-574</a>
                </p>
                {/* Divider */}
                <hr />
                {/* Heading */}
                <h6 className="mb-6">
                    <i className="fe fe-mail text-primary mr-4" /> Write to Us:
                </h6>
                {/* Text */}
                <p className="text-gray-500">
                    Fill out our form and we will contact you
                    within 24 hours.
                </p>
                <p>
                    <strong>Customer Service:</strong><br />
                    <a className="text-gray-500" href="mailto:customer@example.com">customer@example.com</a>
                </p>
                <p className="mb-0">
                    <strong>Careers:</strong><br />
                    <a className="text-gray-500" href="mailto:careers@example.com">careers@example.com</a>
                </p>
                {/* Divider */}
                <hr />
                {/* Heading */}
                <h6 className="mb-6">
                    <i className="fe fe-mail text-primary mr-4" /> Find Us:
                </h6>
                {/* Text */}
                <p className="mb-0 text-gray-500">
                    Want to visit our Offline Stores?
                </p>
                {/* Button */}
                <p className="mb-0">
                    <a className="btn btn-link px-0 text-body" href="store-locator.html">
                        Go to Store Locator <i className="fe fe-arrow-right ml-2" />
                    </a>
                </p>
            </aside>
        </div>
    )
}