import './Mainvisaul.css'


const Mainvisaul = () => {
  return (
    <section className="mv">
      <div className="mv_container">
        <div className="mv_item">
          <img className="mv_img" src="/public/assets/images/gallery/gallery22.jpg" alt="gallary 01" />
        </div>
        <div className="mv_item">
          <p className="mv_heading-date">13<strong> • </strong>10<strong> • </strong>2024</p>
          <img className="mv_img" src="/public/assets/images/gallery/gallery02.jpg" alt="gallary 01" />
          <p className="mv_heading-intro">Hãy cùng chúng tôi bắt đầu hành trình tràn đầy tình yêu, niềm vui và hạnh phúc vĩnh cửu.</p>
        </div>
        <div className="mv_item">
          <img className="mv_img" src="/public/assets/images/gallery/gallery08.jpg" alt="gallary 01" />
        </div>
      </div>
    </section>
  )
}

export default Mainvisaul