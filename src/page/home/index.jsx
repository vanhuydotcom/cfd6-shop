import { CardActions } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { consumerRating, phoneRating, productAction, sportRating } from "../../redux/action/productAction";
import { convertQueryToObj } from "../../util";
import BestPick from "./component/BestPick";
import Brands from "./component/Brands";
import Categories from "./component/Categories";
import CountDown from "./component/CountDown";
import Features from "./component/Features";
import Reviews from "./component/Reviews";
import TopSeller from "./component/TopSeller";

export default function Home() {
    let dispatch = useDispatch()
    useEffect(() => {
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