import './Invitation.css'
import thiepcuoi01 from "/assets/images/wedding-qy-pa-thiep-cuoi-01.jpg";
import thiepcuoi02 from "/assets/images/wedding-qy-pa-thiep-cuoi-02.jpg";

const Invitation = () => {
  return (
    <div className="invitation">
      <div className="invitation_wrapper">
        <img src={thiepcuoi01} alt="Thiệp Cưới Quý & Phương Anh" />
        <img src={thiepcuoi02} alt="Thiệp Cưới Quý & Phương Anh" />
      </div>
    </div>
  )
}

export default Invitation