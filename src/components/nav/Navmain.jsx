import "./nav.css"
import logo from "../../assets/images/logo.png"

const Navmain = () => {
  return (
    <section id="nav">
        <div className="container">
        <div className="nav_main">
            <div className="left">
                <img src={logo} alt="" />
            </div>
            <div className="right">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Properties</a>
                <a href="#">Contact</a>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Navmain