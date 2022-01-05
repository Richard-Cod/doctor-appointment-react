import Header from "./Header"
import Footer from "./Footer"

function BaseLayout({children}) {
    return (
        <div className="main-wrapper">
        {/* Header */}
        <Header />
        {children}
        <Footer />
        {/* /Footer */}
      </div>
    )
}

export default BaseLayout








