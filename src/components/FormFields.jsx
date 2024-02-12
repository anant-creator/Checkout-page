import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormInput from "./FormInput";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export default function FormFields() {
  return (
    <>
      <FormInput name="name" label="Full name *" type="text" />

      <Row className="my-4">
        <Col md className="mb-4-sm">
        <FloatingLabel
          controlId="floatingSelectGrid"
          label="Country code *"
        >
          <Form.Select className="form-control">
            <option value="1">+91</option>
            <option value="2">+36</option>
            <option value="3">+62</option>
          </Form.Select>
        </FloatingLabel>
        </Col>
        <Col md>
          <FormInput name="phone" label="Phone number *" type="number" />
        </Col>
      </Row>

      <Row>
        <Col md className="mb-4-sm">
          <FormInput name="email" label="Email *" type="email" />
        </Col>
        <Col md>
          <FormInput name="confirm_email" label="Confirm email *" type="email" />
        </Col>
      </Row>

      <div className="divider my-4"></div>
    </>
  );
}
