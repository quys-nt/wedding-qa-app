import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Schedule.css'
import imgBg from "/assets/images/gallery/gallery18.jpg";

gsap.registerPlugin(ScrollTrigger);

const Schedule = () => {
  useEffect(() => {
    gsap.fromTo('.schedule_items', {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.4,
      ease: "expo.out",
      scrollTrigger: {
        trigger: '.schedule',
        start: "top 20%",
        markers: false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="schedule">
      <div className="schedule_bg">
        <img src={imgBg} alt="bg schedule" className="schedule_bg-img" />
      </div>
      <div className="schedule_wrapper">
        <p className='schedule_heading-intro'>Tóm tắt bữa tiệc</p>
        <h2 className='schedule_heading-title'>Lịch trình ngày đặc biệt của chúng tôi</h2>
        <div className="schedule_inner">
          <div className="schedule_items">
            <p className="schedule_items-text01">9:00 Sáng</p>
            <p className='schedule_items-text02'>Hôn Lễ Cử Hành Tại Tư Gia</p>
          </div>
          <div className="schedule_items">
            <p className="schedule_items-text01">11:00 Sáng</p>
            <p className='schedule_items-text02'>Chào Đón Khách Mời</p>
          </div>
          <div className="schedule_items">
            <p className="schedule_items-text01">11:30 Sáng</p>
            <p className='schedule_items-text02'>Cử Hành Hôn Lễ Tại Nhà Hàng</p>
          </div>
          <div className="schedule_items">
            <p className="schedule_items-text01">12:00 Sáng</p>
            <p className='schedule_items-text02'>Ăn Uống và Ca Hát</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule