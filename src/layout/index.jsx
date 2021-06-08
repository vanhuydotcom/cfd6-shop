import { Footer } from "./MainLayout/Footer"
import BottomNav from "./MainLayout/Header/BottomNav"
import MainNav from "./MainLayout/Header/MainNav"
import TopNav from "./MainLayout/Header/TopNav"
import { NewsletterHorizontal } from "./MainLayout/NewsletterHorizontal"
import { NewsletterVertical } from "./MainLayout/NewsletterVertical"
import { PasswordReset } from "./MainLayout/PasswordReset"
import { Search } from "./MainLayout/Search"
import { ShoppingCart } from "./MainLayout/ShoppingCart"
import { Sidebar } from "./MainLayout/Sidebar"
import { SizeChart } from "./MainLayout/SizeChart"
import { WaitList } from "./MainLayout/WaitList"
export const MainLayout = ({ children }) => {
    return (
        <div className="App">
            <NewsletterHorizontal />
            <NewsletterVertical />
            <PasswordReset />
            <Search />
            <ShoppingCart />
            <Sidebar />
            <SizeChart />
            <WaitList />
            <TopNav />
            <MainNav />
            <BottomNav />
            {children}
            <Footer />
        </div>
    )
}