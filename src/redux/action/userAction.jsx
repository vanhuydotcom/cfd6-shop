import userApi from "../../service/userApi";
import { ADD_WISHLIST } from "../type";

export function addWishlist(wishlist) {
    return {

        type: ADD_WISHLIST,
        payload: wishlist,

    }
}