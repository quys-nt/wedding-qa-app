import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ThanksYou.css'
import imgThank01 from "/assets/images/gallery/gallery36.jpg";
import imgThank02 from "/assets/images/gallery/gallery14.jpg";

gsap.registerPlugin(ScrollTrigger);

const ThanksYou = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.thanks',
          start: "top 20%",
          markers: false,
        }
      });
      timeline
        .from(
          [".title01", ".title02"], {
          y: -30,
          opacity: 0,
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.4,
        }
        )
        .from(
          [".intro01", ".intro02"], {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.4,
        })
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="thanks">
      <div className="thanks_wrapper">
        <div className="thanks_warpper-item">
          <p className="thanks_headding-title title01">Cảm ơn</p>
          <img src={imgThank01} alt="thanks you" className="thanks_img" />
          <p className="thanks_headding-intro intro01">
            Cảm ơn sự hiện diện của quý khách trong ngày cưới của chúng tôi, đó là niềm vinh dự và niềm hạnh phúc lớn lao với gia đình chúng tôi.
          </p>
        </div>
        <div className="thanks_warpper-item">
          <p className="thanks_headding-title title02">Thứ lỗi</p>
          <img src={imgThank02} alt="thanks you" className="thanks_img" />
          <p className="thanks_headding-intro intro02">
            Chúng tôi cũng xin chân thành xin lỗi nếu có bất kỳ thiếu sót hay sơ suất nào trong buổi tiệc.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ThanksYou