import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Schedule.css'
import imgBg from "/assets/images/gallery/gallery18.jpg";

gsap.registerPlugin(ScrollTrigger);

const Schedule = () => {
  const comp = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.schedule_animation', {
        y: 40,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.4,
        delay: 0.8,
        ease: "expo.out",
        scrollTrigger: {
          trigger: '.schedule',
          start: "top center",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

    })
    return () => ctx.revert();
  }, []);

  return (
    <section className="schedule" ref={comp}>
      <div className="schedule_bg">
        <img src={imgBg} alt="bg schedule" className="schedule_bg-img" />
      </div>
      <div className="schedule_wrapper">
        <p className='schedule_heading-intro schedule_animation'>Tóm tắt bữa tiệc</p>
        <h2 className='schedule_heading-title schedule_animation'>Lịch trình ngày cưới của chúng mình</h2>
        <div className="schedule_inner">
          <div className="schedule_items schedule_animation">
            <p className="schedule_items-text01">9:00 Sáng</p>
            <p className='schedule_items-text02'>Hôn Lễ Cử Hành Tại Tư Gia</p>
          </div>
          <div className="schedule_items schedule_animation">
            <p className="schedule_items-text01">11:00 Sáng</p>
            <p className='schedule_items-text02'>Chào Đón Khách Mời</p>
          </div>
          <div className="schedule_items schedule_animation">
            <p className="schedule_items-text01">11:30 Sáng</p>
            <p className='schedule_items-text02'>Cử Hành Hôn Lễ Tại Nhà Hàng</p>
          </div>
          <div className="schedule_items schedule_animation">
            <p className="schedule_items-text01">12:00 Sáng</p>
            <p className='schedule_items-text02'>Ăn Uống và Ca Hát</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule