//landing page --> where the content will render

import Header from './Header'
import CardContainer from './CardContainer'
import Instructions from './Instructions'
import Footer from './Footer'

const Landing = (props) => {
    return (
        <div>
            <h1>Landing Page</h1>
            <Header />
            <CardContainer />
            <Instructions />
            <Footer />
        </div>
    )
}

export default Landing