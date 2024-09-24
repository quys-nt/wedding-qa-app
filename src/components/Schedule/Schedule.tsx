import './Schedule.css'
import imgBg from "/assets/images/gallery/gallery18.jpg";

const Schedule = () => {
  return (
    <section className="schedule">
      <div className="schedule_bg">
        <img src={imgBg} alt="bg schedule" className="schedule_bg-img" />
      </div>
      <div className="schedule_wrapper">
        <p className='schedule_heading-intro'>Here's a sneak peek of</p>
        <h2 className='schedule_heading-title'>our special day's schedule</h2>
        <div className="schedule_inner">
          <div className="schedule_items">
            <p className="schedule_items-text01">4:00 PM</p>
            <p className='schedule_items-text02'>Ceremony</p>
          </div>
          <div className="schedule_items">
            <p className="schedule_items-text01">5:00 PM</p>
            <p className='schedule_items-text02'>cocktail</p>
          </div>
          <div className="schedule_items">
            <p className="schedule_items-text01">6:00 PM</p>
            <p className='schedule_items-text02'>dinner</p>
          </div>
          <div className="schedule_items">
            <p className="schedule_items-text01">10:00 PM</p>
            <p className='schedule_items-text02'>dancing & fireworks</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule