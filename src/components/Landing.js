//landing page --> where the content will render

import Header from './Header'
import CardContainer from './CardContainer'
import Instructions from './Instructions'
import Footer from './Footer'

const Landing = (props) => {
    return (
        <div className="landing-page">
            <div className="landing-card">
                <Header />
                <CardContainer />
                <Footer />
            </div>
            <div className="landing-instructions">
                <Instructions />
            </div>
        </div>
    )
}

export default Landing