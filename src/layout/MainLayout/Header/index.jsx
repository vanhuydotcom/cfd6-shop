import { Link, Route, NavLink } from 'react-router-dom'
import BottomNav from './component/BottomNav'
import MainNav from './component/MainNav'
import TopNav from './component/TopNav'
import useTranslate from '../../../core/useTranslate'
export const Header = () => {
    let { t } = useTranslate()
    return (
        <>
            <TopNav />
            <MainNav />
            <BottomNav />
        </>
    )
}