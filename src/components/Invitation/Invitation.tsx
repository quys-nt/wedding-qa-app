import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Invitation.css'
import thiepcuoi01 from "/assets/images/wedding-qy-pa-thiep-cuoi-01.jpg";
import thiepcuoi02 from "/assets/images/wedding-qy-pa-thiep-cuoi-02.jpg";

gsap.registerPlugin(ScrollTrigger);

const Invitation = () => {

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".invitation_img-left",
        { xPercent: -100, opacity: 0 },
        {
          xPercent: 0, opacity: 1, duration: 0.8,
          delay: 0.4,
          scrollTrigger: {
            trigger: '.invitation_img-left',
            start: "top center",
            markers: false,
          }
        }
      )
      gsap.fromTo(
        ".invitation_img-right",
        { xPercent: 100, opacity: 0 },
        {
          xPercent: 0, opacity: 1, duration: 0.8,
          delay: 0.4,
          scrollTrigger: {
            trigger: '.invitation_img-right',
            start: "top center",
            markers: false,
          }
        },
      )
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="invitation">
      <div className="invitation_wrapper">
        <img className="invitation_img-left" src={thiepcuoi01} alt="Thiệp Cưới Quý & Phương Anh" />
        <img className="invitation_img-right" src={thiepcuoi02} alt="Thiệp Cưới Quý & Phương Anh" />
      </div>
    </div>
  )
}

export default Invitation