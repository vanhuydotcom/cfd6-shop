import Map from "./component/Map";
import StoreLocator from "./component/StoreLocator";

export default function Store() {
    return (
        <>
            {/* HEADER */}
            <StoreLocator />
            {/* MAP */}
            <Map />
        </>
    )
}