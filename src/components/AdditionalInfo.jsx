import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormInput from "./FormInput";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export default function AdditionalInfo() {
  return (
    <>
      <Row className="mb-4">
        <Col md className="mb-4-sm">
          <FormInput name="age" label="Age *" type="number" />
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingSelectGrid" label="Sex *">
            <Form.Select className="form-control">
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Other</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>

      <FormInput name="date" label="Date of birth *" type="date" />
      
      <div className="divider my-4"></div>
    </>
  );
}
