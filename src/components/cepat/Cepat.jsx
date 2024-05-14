import "./cepat.css"
import img from "../../assets/images/cepat.png"

const Cepat = () => {
  return (
    <div id="cepat">
        <div className="container">
            <div className="cepat_main">
                <div className="header">
                    <h2>Tahapan Pembelian Properti yang Mudah dan Cepat</h2>
                </div>
                <div className="body">
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cepat