import OwlCarousel from "react-owl-carousel";
import Img1 from "../assets/slider-images/1.jpg";
import Img2 from "../assets/slider-images/2.jpg";
import Img3 from "../assets/slider-images/3.jpg";
import Img4 from "../assets/slider-images/4.jpg";
import Trophy from "../assets/icon/trophy.png";
import Star from "../assets/icon/star.png";
import Ticket from "../assets/icon/ticket.png";
import Calender from "../assets/icon/date.png";
import Clock from "../assets/icon/time.png";
import User from "../assets/icon/user.png";
import Savings from "../assets/icon/savings.png";
import Lock from "../assets/icon/lock-light.png";
import Info from "../assets/icon/info.png";


export default function TicketReview() {
  return (
    <>
      <div className="bg-light p-3 br-top ticket-review">
        <div className="relate">
          <div className="bestseller-tag">
            <img className="icon" src={Trophy} alt="trophy" />
            Bestseller
          </div>
          <OwlCarousel
            className="owl-theme destination-slides"
            loop
            items={1}
            margin={10}
            nav
          >
            <div className="item">
              <img className="img-fluid" src={Img1} alt="slider-img" />
            </div>
            <div className="item">
              <img className="img-fluid" src={Img2} alt="slider-img" />
            </div>
            <div className="item">
              <img className="img-fluid" src={Img3} alt="slider-img" />
            </div>
            <div className="item">
              <img className="img-fluid" src={Img4} alt="slider-img" />
            </div>
          </OwlCarousel>
        </div>

        <div className="flex-bar">
          <img className="icon-sm me-2" src={Star} alt="star" />
          <p>
            <span className="heavy">4.9</span> (4.5k) . Cruise
          </p>
        </div>

        <h6 className="tour-name">
          Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef
        </h6>

        <div className="flex-bar">
          <img className="icon-sm me-2" src={Ticket} alt="ticket" />
          <p>
            <span className="heavy">ticket type - variant</span>
          </p>
        </div>

        <div className="flex-bar">
          <img className="icon-sm me-2" src={Calender} alt="calender" />
          <p>
            <span className="heavy">Mon, Feb, 12</span>
            <br />
            duration: 10 days
          </p>
        </div>

        <div className="flex-bar">
          <img className="icon-sm me-2" src={Clock} alt="clock" />
          <p>
            <span className="heavy">10:00 Am</span>
            <br />
            Operating hours: 10:00 to 06:00
          </p>
        </div>

        <div className="flex-bar">
          <img className="icon-sm me-2" src={User} alt="guests" />
          <p>
            <span className="heavy">5 guests</span>
            <br />
          </p>
        </div>

        <div className="dashed-divider"></div>

        <div className="flex-between py-2">
          <p>View payment summary</p>

          <p>+</p>
        </div>
      </div>
      <div className="bg-light br-bottom ticket-review">
        <div className="p-3">
          <div className="flex-between">
            <h4 className="form-heading">Total payable</h4>

            <h4 className="form-heading">$XXX</h4>
          </div>
          <button type="button" className="btn btn-success savings mb-3">
            <img className="icon" src={Savings} alt="savings" /> You save 10$
          </button>

          <div className="flex-between w-fit-content">
            <p className="underline">You will be charged in AED</p>{" "}
            <img className="icon ms-2" src={Info} alt="info" />
          </div>

          <div className="option-lg">
          <p className="mt-4">
            By clicking "confirm & pay", you agree to{" "}
            <a href="#">Tickete&apos;s general terms and conditions</a> and{" "}
            <a href="#">cancellation policy</a>.
          </p>

          <button className="btn payment-btn mt-3" type="button">
            <img className="icon" src={Lock} alt="lock" />
            Confirm & pay
          </button>
          </div>
        </div>
      </div>
    </>
  );
}
