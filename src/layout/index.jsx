import { Footer } from "./MainLayout/Footer"
import { Header } from "./MainLayout/Header"
import { ShoppingCart } from "../component/ShoppingCart"

// import { NewsletterHorizontal } from "./MainLayout/NewsletterHorizontal"
// import { NewsletterVertical } from "./MainLayout/NewsletterVertical"
// import { PasswordReset } from "./MainLayout/PasswordReset"
// import { Search } from "./MainLayout/Search"
// import { Sidebar } from "./MainLayout/Sidebar"
// import { SizeChart } from "./MainLayout/SizeChart"
// import { WaitList } from "./MainLayout/WaitList"
export const MainLayout = ({ children }) => {
    return (
        <div className="App">
            {/* <NewsletterHorizontal />
            <NewsletterVertical />
            <PasswordReset />
            <Search />
            <Sidebar />
            <SizeChart />
            <WaitList /> */}
            <Header />
            {children}
            <Footer />
            <ShoppingCart />
        </div>
    )
}