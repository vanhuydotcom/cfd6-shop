export default function CardCheckout() {
    return (
        <div className="card mb-9 bg-light">
            <div className="card-body">
                <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
                    <li className="list-group-item d-flex">
                        <span>Subtotal</span> <span className="ml-auto font-size-sm">$89.00</span>
                    </li>
                    <li className="list-group-item d-flex">
                        <span>Tax</span> <span className="ml-auto font-size-sm">$00.00</span>
                    </li>
                    <li className="list-group-item d-flex">
                        <span>Shipping</span> <span className="ml-auto font-size-sm">$8.00</span>
                    </li>
                    <li className="list-group-item d-flex font-size-lg font-weight-bold">
                        <span>Total</span> <span className="ml-auto">$97.00</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}