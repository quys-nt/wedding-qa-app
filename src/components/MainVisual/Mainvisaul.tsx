import { useState, useEffect, useRef } from 'react'
import './Mainvisaul.css'
import SaveDay from '../SaveDay/SaveDay';

const Mainvisaul = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  const comp = useRef(null)
  useEffect(() => {
    setTriggerAnimation(true);
  }, []);

  return (
    <section className="mv" ref={comp}>
      <SaveDay triggerAnimation={triggerAnimation} />
      <div className="mv_container">
        <div className="mv_item">
          <img className="mv_img" src="/assets/images/gallery/gallery22.jpg" alt="gallary 01" />
        </div>
        <div className="mv_item">
          <h1 className="mv_heading-date">13<strong> • </strong>10<strong> • </strong>2024</h1>
          <img className="mv_img" src="/assets/images/gallery/gallery20.jpg" alt="gallary 01" />
          <p className="mv_heading-intro">Hãy cùng chúng tôi bắt đầu hành trình tràn đầy tình yêu, niềm vui và hạnh phúc vĩnh cửu.</p>
        </div>
        <div className="mv_item">
          <img className="mv_img" src="/assets/images/gallery/gallery08.jpg" alt="gallary 01" />
        </div>
      </div>
    </section>
  )
}

export default Mainvisaul