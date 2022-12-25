import React from "react"
import ReactDOM from "react-dom"
import Info from "./Info"
import About from "./About"
import Footer from "./Footer"


 export default function App() {
    return (
        <div className="border-box">
            <div className="container">
            <Info />
            <About />
            <Footer />
        </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
