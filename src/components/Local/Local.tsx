import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Local.css'
gsap.registerPlugin(ScrollTrigger);

const Local = () => {

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.local',
          start: "top center",
          markers: false,
        }
      });

      timeline
        .fromTo(
          ".local_heading-local",
          { y: -30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: 0.4 }
        )
        .from(
          ".itemLeft",
          { x: -100, opacity: 0, duration: 0.8 },
        )
        .from(
          ".itemRight",
          { x: 100, opacity: 0, duration: 0.8 },
          "-=0.5"
        );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="local">
      <div className="local_container">
        <div className="local_item itemLeft">
          <p className="local_item-text">TRUNG TÂM HỘI NGHỊ TIỆC CƯỚI THANH TÙNG</p>
        </div>
        <div className="local_item">
          <h2 className="local_heading-local">Dĩ An</h2>
          <img className="local_img" src="/assets/images/gallery/gallery29.jpg" alt="gallary 01" />
        </div>
        <div className="local_item itemRight">
          <p className="local_item-text">số 99, Đường số 9, Dĩ An, Bình Dương</p>
        </div>
      </div>
    </section>
  )
}

export default Local