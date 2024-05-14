import "./kota.css"
import five from "../../assets/images/five.jpg"
import six from "../../assets/images/six.png"
import seven from "../../assets/images/seven.jpg"

const Kota = () => {
  return (
    <section id="frame4">
        <div class="container">
            <div class="frm4_up">
                <h3>Pilihan Auditor</h3>
                <h2>Residen Berbagai Kota</h2>
            </div>
            <div class="frm4_botm">
                <div class="img_dt_1">
                    <>
                    <img src={five} alt=""></img>
                    </>
                    <h3>Magnolia Surabaya</h3>
                    <p>Jl. Gatot Subroto No.KM.6,8, RT.001/RW.008, Jatake, Kec. Jatiuwung, Kota Tangerang, Banten 15136</p>
                </div>
                <div class="img_dt_1">
                    <>
                    <img src={six} alt=""></img>
                    </>
                    <h3>Pinang Residences</h3>
                    <p>Jl. Deplu Raya No.16 RT.5, RW.003
                        Bintaro, Pesanggrahan, Jakarta Selatan 12330</p>
                </div>
                <div class="img_dt_1">
                   <>
                   <img src={seven} alt=""></img>
                   </>
                    <h3>Magnolia Surabaya</h3>
                    <p>1 No.1, RT.1/RW.1, Lb. Bulus, Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12440</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Kota