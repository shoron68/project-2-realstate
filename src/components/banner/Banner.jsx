import "./banner.css"
import bannerimg from "../../assets/images/bnrimg.png"
const Banner = () => {
  return (
    <div className="banenr_main">
        <div className="container">
            <div className="banner_body">
            <div className="left">
                <h1>Temukan Hunian Keluarga Sesuai Keinginanmu</h1>
                <p>Menyediakan hunian bagi keluarga anda dengan varian pilihan dan lokasi yang strategis di kota anda dengan cara yang lebih mudah.</p>
                <input className="input" type="text" placeholder="Search location, properties, residental group" />
                <button>Search</button>
            </div>
            <div className="right">
                <img src={bannerimg} alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Banner