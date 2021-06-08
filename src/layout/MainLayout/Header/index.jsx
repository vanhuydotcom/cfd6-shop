import { Link, Route, NavLink } from 'react-router-dom'
import useTranslate from '../../core/useTranslate'
import TopNav from './TopNav'
import MainNav from './MainNav'

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