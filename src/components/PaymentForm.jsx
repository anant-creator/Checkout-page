import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormInput from "./FormInput";
import Card from "../assets/icon/card.png";
import Visa from "../assets/icon/visa.png";
import Master from "../assets/icon/master.png";
import Pay from "../assets/icon/pay.png";
import Info from "../assets/icon/info.png";
import Savings from "../assets/icon/savings.png";
import Lock from "../assets/icon/lock-light.png";

export default function PaymentForm() {
  return (
    <div className="payment-section p-3">
      <div className="flex-between mb-4">
        <div className="d-flex">
          <span className="icon-border">
            <img className="icon" src={Card} alt="card" />
          </span>
          <h5 className="payment-title">Credit & debit card</h5>
        </div>

        <input
          className="pay-select"
          type="radio"
          name="credit card"
          id="creditCard"
          defaultChecked
        />
      </div>

      <div className="payment-icons mb-4">
        <span className="icon-border">
          <img className="icon" src={Visa} alt="card" />
        </span>
        <span className="icon-border">
          <img className="icon" src={Master} alt="card" />
        </span>
        <span className="icon-border">
          <img className="icon" src={Pay} alt="card" />
        </span>
      </div>

      <Row className="my-4">
        <Col md className="mb-4-sm">
          <FormInput name="name" label="Name on card *" type="text" />
        </Col>
        <Col md>
          <FormInput name="card_number" label="Card number *" type="number" />
        </Col>
      </Row>

      <Row>
        <Col md className="mb-4-sm">
          <FormInput name="expiry_date" label="Expiry date *" type="date" />
        </Col>
        <Col md>
          <FormInput name="cvv" label="<CVV/CVC> *" type="number" />
        </Col>
      </Row>

      <div className="divider my-4"></div>

      <div className="flex-between payable">
        <h4>Total Payable: $XXX</h4>

        <button type="button" className="btn btn-success savings">
          <img className="icon" src={Savings} alt="savings" /> You save 10$
        </button>
      </div>

      <div className="flex-between w-fit-content">
        <p className="underline">You will be charged in AED</p>{" "}
        <img className="icon ms-2" src={Info} alt="info" />
      </div>

      <p className="mt-4">
        By clicking "confirm & pay", you agree to{" "}
        <a href="#">Tickete&apos;s general terms and conditions</a> and{" "}
        <a href="#">cancellation policy</a>.
      </p>

      <button type="submit" className="btn payment-btn mt-3">
        <img className="icon" src={Lock} alt="lock" />
        Confirm & pay
      </button>
    </div>
  );
}
