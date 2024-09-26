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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.items01',
          start: "top center",
          toggleActions: "play none none reverse",
          markers: false,
        }
      })

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.items02',
          start: "top center",
          toggleActions: "play none none reverse",
          markers: false,
        }
      })

      tl.from(
        ".title01", {
        y: -30,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: "back.out(1.7)",
      }).from(
        ".intro01", {
        y: 30,
        opacity: 0,
        duration: 0.8
      })

      tl2.from(
        ".title02", {
        y: -30,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: "back.out(1.7)",
      }).from(
        ".intro02", {
        y: 30,
        opacity: 0,
        duration: 0.8,
      })
    });
    return () => ctx.revert();
  }, []);
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