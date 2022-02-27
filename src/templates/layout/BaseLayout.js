import Header from "./Header"
import Footer from "./Footer"

function BaseLayout({children}) {
    return (
        <div className="main-wrapper">
        <Header />
        {children}
        <Footer />
      </div>
    )
}

export default BaseLayout








