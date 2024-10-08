import './Schedule.css'
import imgBg from "/assets/images/gallery/gallery18.jpg";

const Schedule = () => {

  return (
    <section className="schedule">
      <div className="schedule_bg">
        <img src={imgBg} alt="bg schedule" className="schedule_bg-img" />
      </div>
      <div className="schedule_wrapper">
        <p className='schedule_heading-intro schedule_animation'>Tóm tắt lịch trình</p>
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