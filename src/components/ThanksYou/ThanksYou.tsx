import './ThanksYou.css'
import imgThank01 from "/assets/images/gallery/gallery36.jpg";
import imgThank02 from "/assets/images/gallery/gallery14.jpg";

const ThanksYou = () => {
  return (
    <div className="thanks">
      <div className="thanks_wrapper">
        <div className="thanks_warpper-item items01">
          <p className="thanks_headding-title title01">Cảm ơn</p>
          <img src={imgThank01} alt="thanks you" className="thanks_img" />
          <p className="thanks_headding-intro intro01">
            Sự hiện diện của bạn trong ngày cưới là niềm vinh dự và niềm hạnh phúc với gia đình chúng mình.
          </p>
        </div>
        <div className="thanks_warpper-item items02">
          <p className="thanks_headding-title title02">Thứ lỗi</p>
          <img src={imgThank02} alt="thanks you" className="thanks_img" />
          <p className="thanks_headding-intro intro02">
            Trong buổi tiệc nếu cho thiếu sót hay sơ suất mong bạn vui vẻ bỏ qua và tận hưởng buổi tiệc nhé.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ThanksYou