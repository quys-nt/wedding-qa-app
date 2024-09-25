import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import './SaveDay.css';
interface SaveDayProps {
  triggerAnimation: boolean;
}

const SaveDay = ({ triggerAnimation }: SaveDayProps) => {
  const saveDayRef = useRef(null);

  useLayoutEffect(() => {
    if (triggerAnimation) {
      const t1 = gsap.timeline();
      t1.from(".save-day__inner", {
        opacity: 0,
        rotation: 180,
        scale: 2,
        duration: 3,
        ease: "power3.out",
      }).to(".save-day__inner", {
        rotation: 180,
        duration: 0.8,
      }).to(saveDayRef.current, {
        opacity: 0,
        scale: 2,
        duration: 0.8,
        delay: 0.4,
      },"-=1");
    }
  }, [triggerAnimation]);

  return (
    <div className="save-day" id="introl-slider" ref={saveDayRef}>
      <div className="save-day__inner">
        <p className="save-day__heading">Save <span>The</span> Day</p>
        <p className="save-day__heading-01">13.10<br />2024</p>
        <p className="save-day__heading-02">Phương Anh ♥ Thành Quý</p>
      </div>
    </div>
  );
};

export default SaveDay;
