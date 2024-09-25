import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Mainvisaul.css'
import SaveDay from '../SaveDay/SaveDay'

const Mainvisaul = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  const comp = useRef(null)
  useEffect(() => {
    setTriggerAnimation(true);
  }, []);

  useEffect(() => {
    if (triggerAnimation && comp.current) {
      const ctx = gsap.context(() => {
        const t1 = gsap.timeline();
        t1.from(".mv_heading-date", {
          y: -30,
          opacity: 0,
          duration: 1,
          delay: 1.6,
          ease: "back.out(1.7)",
        }, "+=2").from('.mv_heading-intro', {
          y: 30,
          opacity: 0,
          duration: 0.8,
        }, "-=1").from('.imgLeft', {
          x: -40,
          opacity: 0,
          duration: 0.8,
          delay: 0.4,
        }).from('.imgRight', {
          x: 40,
          opacity: 0,
          duration: 0.8,
          delay: 0.4,
        }, '-=1')
      }, comp);
      return () => ctx.revert();
    }
  }, [triggerAnimation]);

  return (
    <section className="mv" ref={comp}>
      <SaveDay triggerAnimation={triggerAnimation} />
      <div className="mv_container">
        <div className="mv_item imgLeft">
          <img className="mv_img" src="/assets/images/gallery/gallery22.jpg" alt="gallary 01" />
        </div>
        <div className="mv_item">
          <h1 className="mv_heading-date">13<strong> • </strong>10<strong> • </strong>2024</h1>
          <img className="mv_img" src="/assets/images/gallery/gallery20.jpg" alt="gallary 01" />
          <p className="mv_heading-intro">Hãy cùng chúng tôi bắt đầu hành trình tràn đầy tình yêu, niềm vui và hạnh phúc vĩnh cửu.</p>
        </div>
        <div className="mv_item imgRight">
          <img className="mv_img" src="/assets/images/gallery/gallery08.jpg" alt="gallary 01" />
        </div>
      </div>
    </section>
  )
}

export default Mainvisaul