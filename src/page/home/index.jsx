import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriesAction, consumerRating, phoneRating, sportRating } from "../../redux/action/productAction";
import { LOADING } from "../../redux/type";
import BestPick from "./component/BestPick";
import Categories from "./component/Categories";
import Brands from "./component/Brands";
import CountDown from "./component/CountDown";
import Features from "./component/Features";
import Reviews from "./component/Reviews";
import TopSeller from "./component/TopSeller";

export default function Home() {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(categoriesAction())
        dispatch({
            type: LOADING
        })
        dispatch(phoneRating())
        dispatch(sportRating())
        dispatch(consumerRating())
    }, [])

    return (
        <>
            <Categories />
            <Features />
            <BestPick />
            <TopSeller />
            <CountDown />
            <Reviews />
            <Brands />
        </>
    )
}