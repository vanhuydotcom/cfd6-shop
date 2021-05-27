export const FormContact = () => {
    return (
        <div className="col-12 col-md-8">
            {/* Form */}
            <form>
                {/* Email */}
                <div className="form-group">
                    <label className="sr-only" htmlFor="contactName">
                        Your Name *
</label>
                    <input className="form-control form-control-sm" id="contactName" type="text" placeholder="Your Name *" required />
                </div>
                {/* Email */}
                <div className="form-group">
                    <label className="sr-only" htmlFor="contactEmail">
                        Your Email *
</label>
                    <input className="form-control form-control-sm" id="contactEmail" type="email" placeholder="Your Email *" required />
                </div>
                {/* Email */}
                <div className="form-group">
                    <label className="sr-only" htmlFor="contactTitle">
                        Title *
</label>
                    <input className="form-control form-control-sm" id="contactTitle" type="text" placeholder="Title *" required />
                </div>
                {/* Email */}
                <div className="form-group mb-7">
                    <label className="sr-only" htmlFor="contactMessage">
                        Message *
</label>
                    <textarea className="form-control form-control-sm" id="contactMessage" rows={5} placeholder="Message *" required defaultValue={""} />
                </div>
                {/* Button */}
                <button className="btn btn-dark">
                    Send Message
</button>
            </form>
        </div>
    )
}