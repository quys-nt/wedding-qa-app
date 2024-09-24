import './ThanksYou.css'
import imgThank01 from "/assets/images/gallery/gallery36.jpg";
import imgThank02 from "/assets/images/gallery/gallery14.jpg";

const ThanksYou = () => {
  return (
    <div className="thanks">
      <div className="thanks_wrapper">
        <div className="thanks_warpper-item">
          <p className="thanks_headding-title">registry</p>
          <img src={imgThank01} alt="thanks you" className="thanks_img" />
          <p className="thanks_headding-intro">
            While your presence at our wedding is the greatest gift, if you wish to share in our joy through a gift, please visit our registry.
          </p>
        </div>
        <div className="thanks_warpper-item">
          <p className="thanks_headding-title">registry</p>
          <img src={imgThank02} alt="thanks you" className="thanks_img" />
          <p className="thanks_headding-intro">
          While your presence at our wedding is the greatest gift, if you wish to share in our joy through a gift, please visit our registry.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ThanksYou