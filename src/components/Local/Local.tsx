import './Local.css'

const Local = () => {
  return (
    <section className="local">
      <div className="local_container">
        <div className="local_item itemLeft">
          <p className="local_item-text">TRUNG TÂM HỘI NGHỊ TIỆC CƯỚI THANH TÙNG</p>
        </div>
        <div className="local_item">
          <h2 className="local_heading-local">Buổi tiệc chung vui</h2>
          <img className="local_img" src="/assets/images/img-nha-hang-tiec-cuoi.jpg" alt="gallary 01" />
        </div>
        <div className="local_item itemRight">
          <p className="local_item-text">số 99, Đường số 9, Dĩ An, Bình Dương</p>
        </div>
      </div>
    </section>
  )
}

export default Local