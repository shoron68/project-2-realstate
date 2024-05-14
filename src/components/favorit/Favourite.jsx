import "./favourite.css"
import one from "../../assets/images/one.jpg"
import two from "../../assets/images/two.jpg"

const Favourite = () => {
  return (
    <section id="frame3">
    <div class="container">
        <div class="frame3_upper">
            <h4>Pilihan konsumen</h4>
            <h2>Residen Favorit</h2>
        </div>
      <div class="frame_bottom">
        <div class="frame3_bottom_left">
            <div class="img01">
                <>
                <img src={one} alt=""></img>
                </>
            </div>
            <div class="img02">
                <>
                <img src={two} alt=""></img>
                </>
            </div>
           </div>
           <div class="frame_bottom_right">
            <h2>Bangunan yang dirancang oleh Aristektur Handal</h2>
            <p>Tanpa diragukan, properti yang disediakan dalam webiste kami merupakan hasil kerjasama secara profesional dengan para Arsitektur ternama dan Developer yang terpercaya.</p>
            <div class="btn">
                <a href="#"> <i class="fa-solid fa-phone"></i> Hubungi Kami</a>
                <a href="#"><span>Explore lebih banyak</span></a>
            </div>
           </div>
      </div>
    </div>
    </section>
  )
}

export default Favourite