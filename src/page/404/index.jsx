import { useTranslate } from "../../core/useTranslate"

export default function NotFound() {
    let { t } = useTranslate()
    return (
        <>
            {/* CONTENT */}
            <section className="py-12">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
                            {/* Icon */}
                            <div className="mb-7 font-size-h1">🙁</div>
                            {/* Heading */}
                            <h2 className="mb-5">404. {t('Page not found')}.</h2>
                            {/* Text */}
                            <p className="mb-7 text-gray-500">
                                {t("Sorry, we couldn't find the page you where looking for. We suggest that you return to home page.")}
                            </p>
                            {/* Button */}
                            <a className="btn btn-dark" href="index.html">
                                {t('Go to Homepage')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}