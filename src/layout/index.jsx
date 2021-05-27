import { Footer } from "./MainLayout/Footer"
import { Header } from "./MainLayout/Header"
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
        <>
            <NewsletterHorizontal />
            <NewsletterVertical />
            <PasswordReset />
            <Search />
            <ShoppingCart />
            <Sidebar />
            <SizeChart />
            <WaitList />
            <Header />
            {children}
            <Footer />
        </>
    )
}