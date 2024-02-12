import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import info from "../assets/icon/info.png";
import FormFields from "./FormFields";
import AdditionalInfo from "./AdditionalInfo";
import PaymentForm from "./PaymentForm";
import Accordion from "react-bootstrap/Accordion";
import GooglePay from "../assets/icon/g-pay.png";
import ApplePay from "../assets/icon/apple-pay.png";
import InfoDark from "../assets/icon/info-dark.png";
import Chat from "../assets/icon/chat.png";
import TicketReview from "./TicketReview";

export default function CheckoutForm() {
  return (
    <main>
      <section className="my-5">
        <Container>
          <h1 className="main-heading heading-sm">Confirm & Pay</h1>
          <Row className="reverse">
            <Col md={8}>
              <h1 className="main-heading heading-lg">Confirm & Pay</h1>

              <div className="bg-light p-3 info-block">
                <div className="text-block">
                  <p className="text-bold">Free cancellation</p>

                  <p>Tickets can be cancelled by 20 February, 2024</p>
                </div>
                <img className="icon info-icon" src={info} alt="info" />
              </div>

              <h2 className="form-heading">Enter your details</h2>

              <p className="form-subheading">
                We&apos;ll be sending your tickets to the details below. Booking
                for a friend? Add their details.
              </p>

              <Form>
                <FormFields />

                <h2 className="form-heading">Additional Information</h2>

                <p className="form-subheading">
                  We need a few more details to complete your reservation.
                </p>

                <AdditionalInfo />

                <h2 className="form-heading">Select your mode of payment</h2>

                <p className="form-subheading">
                  Payments with Tickete are secure and encrypted.
                </p>

                <PaymentForm />
              </Form>

              <div className="bg-light p-3 info-block mb-4">
                <div className="d-flex">
                  <img className="payment-icon me-3" src={ApplePay} alt="" />
                  <h5 className="coming-soon">Coming Soon</h5>
                </div>
                <input
                  className="pay-select"
                  type="radio"
                  name="apple"
                  id="applePay"
                  disabled
                />
              </div>

              <div className="bg-light p-3 info-block">
                <div className="d-flex">
                  <img className="payment-icon me-3" src={GooglePay} alt="" />
                  <h5 className="coming-soon">Coming Soon</h5>
                </div>
                <input
                  className="pay-select"
                  type="radio"
                  name="apple"
                  id="applePay"
                  disabled
                />
              </div>

              <div className="divider my-4"></div>

              <h4>Total Payable: $XXX</h4>

              <div className="bg-light p-3 info-block">
                <div className="d-flex">
                  <img className="icon-sm" src={InfoDark} alt="info" />
                  <div>
                    <h6>You will be charged in AED</h6>

                    <p>
                      The price shown here is in US Dollar (USD) as per the
                      current conversion rate.You will be charged in United Arab
                      Emirates Dirham. (AED).{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <TicketReview />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="faq-section" id="faq-section">
        <Container>
          <Row>
            <Col md={5}>
              <h2 className="form-heading">Frequently asked questions</h2>

              <p className="form-subheading">
                Here are some of the most asked questions.
              </p>

              <div className="bg-light p-3 info-block">
                <div className="d-flex">
                  <div>
                    <h4>Still need help?</h4>
                    <h4>We&apos;re here for you.</h4>

                    <button className="btn payment-btn mt-3" type="button">
                      Chat with us
                    </button>
                  </div>
                </div>

                <img className="icon-big" src={Chat} alt="chat" />
              </div>
            </Col>
            <Col md={7}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    What should I do on my first trip to Rome?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    What are some hidden gems to see in Rome?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    How much time should I spend in Rome?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    What food is Rome known for?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    What is tne best way to get around Rome?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
